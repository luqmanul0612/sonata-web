"use client";

import Image from "next/image";
import classNames from "./news.module.scss";
import mainImage from "@/assets/images/news/news-main-image.webp";
import { useTranslation } from "react-i18next";
import { newsData } from "./data";
import * as Tabs from "@radix-ui/react-tabs";
import NewsCard from "@/components/molecules/news-card";
import { useSearchParams } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";

const NewsContainer = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
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
        <Tabs.Root
          className={classNames.tabs}
          onValueChange={(value) => {
            const params = new URLSearchParams();
            params.set("category", value);
            router.push(`?${params.toString()}`, { scroll: false });
          }}
          defaultValue={category || "latest"}
        >
          <Tabs.List
            className={classNames["tabs-list"]}
            aria-label="Manage your account"
          >
            {newsData.map((item) => (
              <Tabs.Trigger
                key={item.key}
                className={classNames["tabs-trigger"]}
                value={item.key}
              >
                {t(item.label)}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {newsData.map((item) => (
            <Tabs.Content
              key={item.key}
              className={classNames["tabs-content"]}
              value={item.key}
            >
              <div className={classNames["news-wrapper"]}>
                {item.items.map((news) => (
                  <NewsCard key={news.key} data={news} category={item.key} />
                ))}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </div>
  );
};

export default NewsContainer;
