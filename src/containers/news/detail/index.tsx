"use client";

import Image from "next/image";
import classNames from "./news-detail.module.scss";
import { FC } from "react";
import { newsData } from "@/app/news/[slug]/data";
import { newsData as catList } from "../data";
import { newsData as newsHometList } from "../../home/news/data";
import ArrowLeft from "@/assets/icons/arrow-left.svg";
import { useSearchParams } from "next/navigation";
import Clock from "@/assets/icons/clock.svg";
import { useRouter } from "nextjs-toploader/app";
import DOMPurify from "dompurify";
import { useTranslation } from "react-i18next";
import NewsCard from "@/components/molecules/news-card";

type NewsContainerProps = {
  slug: string;
};

const NewsDetailContainer: FC<NewsContainerProps> = ({ slug }) => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get("category");
  const detail = newsData.find((item) => item.key === slug);
  const categoryLabel =
    catList.find((item) => item.key === category)?.label || "Back";

  const cleanHtml = DOMPurify.sanitize(detail?.html ?? "");
  const onClickBack = () => {
    router.back();
  };
  return (
    <div className={classNames.main}>
      {!!detail && (
        <div className={classNames.content}>
          <div className={classNames.header}>
            <div className={classNames.left}>
              <button className={classNames.back} onClick={onClickBack}>
                <ArrowLeft className={classNames.icon} /> {categoryLabel}
              </button>
              <p className={classNames.title}>| {detail.title}</p>
            </div>
            <div className={classNames.right}>
              <div className={classNames.date}>
                <Clock className={classNames.icon} />
                <p className={classNames.text}>{detail.date}</p>
              </div>
            </div>
          </div>
          <div className={classNames["news-wrapper"]}>
            <div className={classNames.image}>
              <Image
                src={detail?.image}
                alt="images"
                fill
                className={classNames.img}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={classNames.content}>
              <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
            </div>
          </div>
          <div className={classNames["other-news"]}>
            <p className={classNames.title}>{t("Other News")}</p>
            <div className={classNames["other-news-wrapper"]}>
              {newsHometList.map((item) => (
                <NewsCard key={item.key} data={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsDetailContainer;
