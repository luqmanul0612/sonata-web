"use client";

import { useTranslation } from "react-i18next";
import classNames from "./certificates.module.scss";

const CertificatesContainer = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames.main}>
      <div className={classNames.content}>
        <p className={classNames.title}>{t("Sertifikat & Penghargaan")}</p>
      </div>
    </div>
  );
};

export default CertificatesContainer;
