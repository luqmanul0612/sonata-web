"use client";

import { useTranslation } from "react-i18next";
import classNames from "./projects.module.scss";

const CertificatesContainer = () => {
  const { t } = useTranslation();

  return (
    <div className={classNames.main}>
      <div className={classNames.content}>
        <p className={classNames.title}>{t("Project & Portfolio")}</p>
        <p className={classNames.description}>
          Lorem ipsum dolor sit amet consectetur. Ornare orci amet ut nunc
          tempor consectetur libero. Lectus nisl morbi libero convallis vel
          ipsum. Quisque donec diam odio adipiscing cursus aliquam vel.
        </p>
      </div>
    </div>
  );
};

export default CertificatesContainer;
