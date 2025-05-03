"use client";

import { useTranslation } from "react-i18next";
import classNames from "./news.module.scss";
import { newsData } from "./data";
import Image from "next/image";
import Clock from "@/assets/icons/clock.svg";

const News = () => {
  const { t } = useTranslation();
  return (
    <section id="news" className={classNames.main}>
      <div className={classNames.content}>
        <p className={classNames.title}>{t("Latest News")}</p>
        <div className={classNames["news-wrapper"]}>
          {newsData.map((item) => (
            <div className={classNames.news} key={item.key}>
              <div className={classNames.image}>
                <Image
                  src={item.image}
                  alt="images"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={classNames.info}>
                <div className={classNames.date}>
                  <Clock className={classNames.icon} />
                  <p className={classNames.text}>{item.date}</p>
                </div>
                <p className={classNames.title}>{item.title}</p>
                <p className={classNames.content}>{item.content}</p>
                <a href="" className={classNames.more}>
                  {t("Read more")}...
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
