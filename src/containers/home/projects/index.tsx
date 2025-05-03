"use client";

import Image from "next/image";
import classNames from "./projects.module.scss";
import projectPorto1 from "@/assets/images/project-porto-1.jpg";
import projectPorto2 from "@/assets/images/project-porto-2.jpg";
import Map from "@/assets/icons/map.svg";
import Button from "@/components/atoms/button";
import "keen-slider/keen-slider.min.css";
import { projectsData } from "./data";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
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
                src={projectPorto2}
                className={classNames.img}
                alt="images"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <Button className={classNames.button}>{t("See All")}</Button>
        </div>
        <div className={classNames["projects"]}>
          {projectsData.map((item) => (
            <div key={item.key} className={classNames.project}>
              <div className={classNames.image}>
                <Image
                  src={item.image}
                  className={classNames.img}
                  alt="images"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className={classNames.title}>{item.title}</p>
              <button className={classNames.location}>
                <Map className={classNames.icon} />
                <p>Lihat Lokasi</p>
              </button>
              <p className={classNames.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
