"use client";

import classNames from "./projects-detail.module.scss";
import { FC, MouseEventHandler } from "react";
import ArrowLeft from "@/assets/icons/arrow-left.svg";
import { useRouter } from "nextjs-toploader/app";
import DOMPurify from "dompurify";
import { useTranslation } from "react-i18next";
import { projectsData } from "@/app/projects/[slug]/data";
import Map from "@/assets/icons/map.svg";
import Image from "next/image";

type ProjectsContainerProps = {
  slug: string;
};

const ProjectsDetailContainer: FC<ProjectsContainerProps> = ({ slug }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const detail = projectsData.find((item) => item.key.toString() === slug);
  const cleanHtml = DOMPurify.sanitize(detail?.html ?? "");
  const onClickBack = () => {
    router.back();
  };

  const onClickMap: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={classNames.main}>
      {!!detail && (
        <div className={classNames.content}>
          <div className={classNames.header}>
            <div className={classNames.left}>
              <button className={classNames.back} onClick={onClickBack}>
                <ArrowLeft className={classNames.icon} /> {t("Projects")}
              </button>
              <p className={classNames.title}>| {detail.title}</p>
            </div>
          </div>
          <div className={classNames["project-wrapper"]}>
            <div className={classNames["project-header"]}>
              <div className={classNames["project-header-left"]}>
                <p className={classNames.title}>{detail.title}</p>
                <p className={classNames.date}>
                  {`${t("Uploaded on,")} ${detail.date}`}
                </p>
              </div>
              <div className={classNames["project-header-right"]}>
                <button className={classNames.location} onClick={onClickMap}>
                  <Map className={classNames.icon} />
                  <p>Lihat Lokasi</p>
                </button>
              </div>
            </div>
            <div className={classNames["project-content"]}>
              <div dangerouslySetInnerHTML={{ __html: cleanHtml }}>
                <div className={classNames.image}>
                  <Image
                    src={detail.image}
                    className={classNames.img}
                    alt="images"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsDetailContainer;
