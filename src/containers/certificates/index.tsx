"use client";

import { useTranslation } from "react-i18next";
import classNames from "./certificates.module.scss";
import { certificatesData } from "./data";
import Image from "next/image";

const CertificatesContainer = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames.main}>
      <div className={classNames.content}>
        <p className={classNames.title}>{t("Sertifikat & Penghargaan")}</p>
        <div className={classNames["certificates-wrapper"]}>
          {certificatesData.map((item) => (
            <div className={classNames.certificate} key={item.key}>
              <div className={classNames.image}>
                <Image
                  src={item.image}
                  alt="images"
                  fill
                  style={{ objectFit: "cover" }}
                  className={classNames.img}
                />
              </div>
              <div className={classNames.info}>
                <p className={classNames.title}>{item.title}</p>
                <p className={classNames.date}>{item.date}</p>
                <p className={classNames.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesContainer;
