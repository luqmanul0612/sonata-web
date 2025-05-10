"use client";

import Button from "@/components/atoms/button";
import classNames from "./offers.module.scss";
import { useTranslation } from "react-i18next";

const Offers = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames.main}>
      <div className={classNames.content}>
        <p className={classNames.message}>{t("get_a_quote_text")}</p>
        <Button variant="neutral">{t("Get a Quote")}</Button>
      </div>
    </div>
  );
};

export default Offers;
