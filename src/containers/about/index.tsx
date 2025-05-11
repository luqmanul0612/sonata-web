"use client";

import Image from "next/image";
import classNames from "./about.module.scss";
import mainImage from "@/assets/images/about/about-main-image.svg?url";
import { Trans, useTranslation } from "react-i18next";

const AboutContainer = () => {
  const { i18n } = useTranslation();
  return (
    <div className={classNames.main}>
      <div className={classNames.content}>
        <div className={classNames.image}>
          <Image
            src={mainImage}
            alt="images"
            fill
            className={classNames.img}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={classNames["text-content"]}>
          <Trans
            key={i18n.language}
            i18nKey="about_text"
            components={{
              companyname: <p className={classNames.companyname} />,
              subtitle: <p className={classNames.subtitle} />,
              br: <br />,
              text: <p className={classNames.text} />,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
