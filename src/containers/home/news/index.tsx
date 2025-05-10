"use client";

import { useTranslation } from "react-i18next";
import classNames from "./news.module.scss";
import { newsData } from "./data";
import NewsCard from "@/components/molecules/news-card";

const News = () => {
  const { t } = useTranslation();
  return (
    <section id="news" className={classNames.main}>
      <div className={classNames.content}>
        <p className={classNames.title}>{t("Latest News")}</p>
        <div className={classNames["news-wrapper"]}>
          {newsData.map((item) => (
            <NewsCard key={item.key} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
