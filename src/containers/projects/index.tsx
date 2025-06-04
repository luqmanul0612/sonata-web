"use client";

import { useTranslation } from "react-i18next";
import classNames from "./projects.module.scss";
import Image from "next/image";
import mainImage from "@/assets/images/projects/projects-main-image.webp";
import * as Tabs from "@radix-ui/react-tabs";
import { projectsData } from "./data";
import ProjectCard from "@/components/molecules/project-card";
import GetQuote from "@/components/molecules/get-quote";

const CertificatesContainer = () => {
  const { t } = useTranslation();

  return (
    <div className={classNames.main}>
      <div className={classNames.content}>
        <div className={classNames["text-wrapper"]}>
          <p className={classNames.title}>{t("Project & Portfolio")}</p>
          <p className={classNames.description}>{t("project_porto_desc")}</p>
        </div>
        <div className={classNames.image}>
          <Image
            src={mainImage}
            alt="images"
            fill
            className={classNames.img}
            style={{ objectFit: "cover" }}
          />
        </div>
        <Tabs.Root className={classNames.tabs} defaultValue="projects">
          <Tabs.List
            className={classNames["tabs-list"]}
            aria-label="Manage your account"
          >
            {projectsData.map((item) => (
              <Tabs.Trigger
                key={item.key}
                className={classNames["tabs-trigger"]}
                value={item.key}
              >
                {t(item.label)}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {projectsData.map((item) => (
            <Tabs.Content
              key={item.key}
              className={classNames["tabs-content"]}
              value={item.key}
            >
              <div className={classNames["projects-wrapper"]}>
                {item.items.map((project) => (
                  <ProjectCard key={project.key} data={project} />
                ))}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
        <GetQuote />
      </div>
    </div>
  );
};

export default CertificatesContainer;
