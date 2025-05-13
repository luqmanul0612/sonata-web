"use client";

import classNames from "@/components/molecules/news-card/news-card.module.scss";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import Clock from "@/assets/icons/clock.svg";
import { useTranslation } from "react-i18next";
import { useRouter } from "nextjs-toploader/app";

interface NewsCardProps {
  data: {
    key: string;
    image: string | StaticImageData;
    date: string;
    title: string;
    content: string;
    readMore?: (key: string) => void;
  };
  category?: string;
}

const NewsCard: FC<NewsCardProps> = (props) => {
  const { image, date, content, title, key } = props.data;
  const { t } = useTranslation();
  const router = useRouter();

  const onClickMore = () => {
    const params = new URLSearchParams();
    if (props.category) params.set("category", props.category);
    router.push(`/news/${key}?${params.toString()}`);
  };

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
        <button className={classNames.more} onClick={onClickMore}>
          {t("Read more")}...
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
