"use client";

import Image from "next/image";
import classNames from "./services.module.scss";
import mainServiceImage from "@/assets/images/services/services-header.webp";
import { servicesData } from "./data";
import { Trans, useTranslation } from "react-i18next";
import clsx from "clsx";
import { useState } from "react";

const ServicesContainer = () => {
  const [active, setActive] = useState(1);
  const { i18n } = useTranslation();

  return (
    <div className={classNames.main}>
      <div className={classNames.content}>
        <div className={classNames["main-image"]}>
          <div className={classNames.image}>
            <Image
              src={mainServiceImage}
              alt="images"
              fill
              className={classNames.img}
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className={classNames.text}>
            Lorem ipsum dolor sit amet consectetur. Ornare orci amet ut nunc
            tempor consectetur libero. Lectus nisl morbi libero convallis vel
            ipsum. Quisque donec diam odio adipiscing cursus aliquam vel. At
            turpis nec felis sed enim. Donec velit nunc et adipiscing sit diam
            bibendum nunc mi. Ullamcorper nulla id a non. Ipsum lacus vivamus
            vitae maecenas varius. Suspendisse sagittis suspendisse cras in
            tempor non nunc ultricies tristique.
          </p>
        </div>
        <div className={classNames.services}>
          <div className={classNames["service-list"]}>
            {servicesData.map((item) => (
              <button
                className={clsx(classNames.service, {
                  [classNames.active]: item.key === active,
                })}
                onClick={() => setActive(item.key)}
                key={item.key}
              >
                <div className={classNames.image}>
                  <Image
                    src={item.image}
                    alt="images"
                    fill
                    className={classNames.img}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={classNames.info}>
                  <p className={classNames.label}>{item.label}</p>
                </div>
              </button>
            ))}
          </div>
          <div className={classNames["service-detail"]}>
            <Trans
              key={i18n.language}
              i18nKey={`service_content.${active}`}
              components={{
                br: <br key="br" />,
                title: <p className={classNames["content-title"]} />,
                subtitle: <p className={classNames["content-subtitle"]} />,
                text: <p className={classNames["content-text"]} />,
                item: <p className={classNames["content-item"]} />,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContainer;
