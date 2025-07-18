"use client";

import Image from "next/image";
import classNames from "./clients.module.scss";
import mainImage from "@/assets/images/clients/clients-main.webp";
import { Trans, useTranslation } from "react-i18next";
import { clientsData } from "./data";

const ClientsContainer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={classNames.main}>
      <div className={classNames.content}>
        <div className={classNames["main-image"]}>
          <div className={classNames.image}>
            <Image
              src={mainImage}
              alt="images"
              fill
              className={classNames.img}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={classNames.text}>
            <p className={classNames.title}>{t("Our Clients,")}</p>
            <p className={classNames.description}>
              <Trans
                key={i18n.language}
                i18nKey="clients_main_text"
                components={{
                  br: <br />,
                }}
              />
            </p>
          </div>
        </div>
        <div className={classNames.clients}>
          <div className={classNames.header}>
            <p className={classNames.title}>{t("Clients")}</p>
          </div>
          <div className={classNames["clients-wrapper"]}>
            {clientsData.map((item) => (
              <div className={classNames.client} key={item.key}>
                <div className={classNames.image}>
                  <Image
                    src={item.image}
                    alt="images"
                    fill
                    className={classNames.img}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className={classNames.name}>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsContainer;
