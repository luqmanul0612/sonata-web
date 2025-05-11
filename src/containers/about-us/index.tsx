"use client";

import Image from "next/image";
import classNames from "./about-us.module.scss";
import mainImage from "@/assets/images/about/about-main-image.svg?url";
import organizationCarts from "@/assets/images/about/organization-carts.webp";
import { Trans, useTranslation } from "react-i18next";
import GetQuote from "@/components/molecules/get-quote";

const AboutUsContainer = () => {
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
        <div className={classNames["organization-carts"]}>
          <Image
            src={organizationCarts}
            alt="images"
            fill
            className={classNames.img}
            style={{ objectFit: "cover" }}
          />
        </div>
        <GetQuote />
      </div>
    </div>
  );
};

export default AboutUsContainer;
