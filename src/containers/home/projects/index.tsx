"use client";

import Image from "next/image";
import classNames from "./projects.module.scss";
import projectPorto1 from "@/assets/images/home/project-porto-1.webp";
import projectPorto2 from "@/assets/images/home/project-porto-2.webp";
import projectPorto3 from "@/assets/images/home/project-porto-3.webp";
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
          <p className={classNames.description}>
            Lorem ipsum dolor sit amet consectetur. Ornare orci amet ut nunc
            tempor consectetur libero. Lectus nisl morbi libero convallis vel
            ipsum. Quisque donec diam odio adipiscing cursus aliquam vel. At
            turpis nec felis sed enim. Donec velit nunc et adipiscing sit diam
            bibendum nunc mi. Ullamcorper nulla id a non. Ipsum lacus vivamus
            vitae maecenas varius. Suspendisse sagittis suspendisse cras in
            tempor non nunc ultricies tristique.
          </p>
          <div className={classNames.image}>
            <Image
              src={projectPorto1}
              className={classNames.img}
              alt="images"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={classNames["other-porto"]}>
            <div>
              <Image
                src={projectPorto2}
                className={classNames.img}
                alt="images"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <Image
                src={projectPorto3}
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
            <ProjectCard key={item.key} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
