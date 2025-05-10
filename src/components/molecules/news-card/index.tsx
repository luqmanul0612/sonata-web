"use client";

import classNames from "@/components/molecules/news-card/news-card.module.scss";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import Clock from "@/assets/icons/clock.svg";
import { useTranslation } from "react-i18next";

interface NewsCardProps {
  data: {
    image: string | StaticImageData;
    date: string;
    title: string;
    content: string;
    readMore?: (key: string) => void;
  };
}

const NewsCard: FC<NewsCardProps> = (props) => {
  const { image, date, content, title } = props.data;
  const { t } = useTranslation();

  return (
    <div className={classNames.main}>
      <div className={classNames.image}>
        <Image src={image} alt="images" fill style={{ objectFit: "cover" }} />
      </div>
      <div className={classNames.info}>
        <div className={classNames.date}>
          <Clock className={classNames.icon} />
          <p className={classNames.text}>{date}</p>
        </div>
        <p className={classNames.title}>{title}</p>
        <p className={classNames.content}>{content}</p>
        <a href="" className={classNames.more}>
          {t("Read more")}...
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
