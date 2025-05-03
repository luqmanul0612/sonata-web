"use client";

import Button from "@/components/atoms/button";
import classNames from "./offers.module.scss";
import { useTranslation } from "react-i18next";

const Offers = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames.main}>
      <div className={classNames.content}>
        <p className={classNames.message}>
          Lorem ipsum dolor sit amet consectetur. Ornare orci amet ut nunc
          tempor consectetur libero. Lectus nisl morbi libero convallis vel
          ipsum. Quisque donec diam odio adipiscing cursus aliquam vel. At
          turpis nec felis sed enim. Donec velit nunc et adipiscing sit diam
          bibendum nunc mi. Ullamcorper nulla id a non. Ipsum lacus vivamus
          vitae maecenas varius.
        </p>
        <Button variant="neutral">{t("Get a Quote")}</Button>
      </div>
    </div>
  );
};

export default Offers;
