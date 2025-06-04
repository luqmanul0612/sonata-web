"use client";

import Image from "next/image";
import classNames from "./projects.module.scss";
import projectPortoMain from "@/assets/images/projects/projects-main-image.webp";
import portofolio1 from "@/assets/images/projects/portofolio-example-1.webp";
import portofolio2 from "@/assets/images/projects/portofolio-example-2.webp";
import Button from "@/components/atoms/button";
import "keen-slider/keen-slider.min.css";
import { projectsData } from "./data";
import { useTranslation } from "react-i18next";
import { useRouter } from "nextjs-toploader/app";
import ProjectCard from "@/components/molecules/project-card";

const Projects = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <section id="projects" className={classNames.main}>
      <div className={classNames.content}>
        <div className={classNames["project-porto"]}>
          <p className={classNames.title}>{t("Project & Portfolio")}</p>
          <p className={classNames.description}>{t("project_porto_desc")}</p>
          <div className={classNames.image}>
            <Image
              src={projectPortoMain}
              className={classNames.img}
              alt="images"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={classNames["other-porto"]}>
            <div>
              <Image
                src={portofolio2}
                className={classNames.img}
                alt="images"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <Image
                src={portofolio1}
                className={classNames.img}
                alt="images"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <Button
            className={classNames.button}
            onClick={() => router.push("/projects")}
          >
            {t("See All")}
          </Button>
        </div>
        <div className={classNames["projects"]}>
          {projectsData.map((item) => (
            <ProjectCard
              key={item.key}
              data={item}
              className={classNames.project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
