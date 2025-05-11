"use client";

import Image from "next/image";
import classNames from "./news.module.scss";
import clientsMain from "@/assets/images/news/news-main-image.webp";
import { useTranslation } from "react-i18next";

const NewsContainer = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames.main}>
      <div className={classNames.content}>
        <div className={classNames.image}>
          <Image
            src={clientsMain}
            alt="images"
            fill
            className={classNames.img}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsContainer;
