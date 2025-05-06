"use client";

import Image from "next/image";
import classNames from "./about-company.module.scss";
import aboutCompany from "@/assets/images/home/about-company.webp";
import TickCircle from "@/assets/icons/tick-circle.svg";
import Button from "@/components/atoms/button";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import { Trans, useTranslation } from "react-i18next";

const AboutCompany = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className={classNames.main}>
      <div className={classNames.content}>
        <div className={classNames.image}>
          <Image src={aboutCompany} alt="images" fill className={classNames.img} />
        </div>
        <div className={classNames.info}>
          <p className={classNames.title}>{t("About the Company")}</p>
          <div className={classNames["tick-wrapper"]}>
            <div className={classNames.tick}>
              <TickCircle className={classNames.icon} color="#28C840" />
              <p className={classNames.text}>{t("Experience & Expertise")}</p>
            </div>
            <div className={classNames.tick}>
              <TickCircle className={classNames.icon} color="#118DE5" />
              <p className={classNames.text}>{t("Modern Technology")}</p>
            </div>
            <div className={classNames.tick}>
              <TickCircle className={classNames.icon} color="#FF5F57" />
              <p className={classNames.text}>{t("Analysis & Execution")}</p>
            </div>
          </div>
          <p className={classNames.description}>
            <Trans
              i18nKey="about_company_text"
              components={[<br key="br" />]}
            />
          </p>
          <Button
            className={classNames.button}
            endIcon={<ArrowRight className={classNames.arrow} />}
          >
            {t("Read more")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
