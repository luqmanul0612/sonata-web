"use client";

import Image from "next/image";
import classNames from "./projects.module.scss";
import projectA from "@/assets/images/project-a.jpg";
import projectB from "@/assets/images/project-b.jpg";
import projectPorto1 from "@/assets/images/project-porto-1.jpg";
import projectPorto2 from "@/assets/images/project-porto-2.jpg";
import Map from "@/assets/icons/map.svg";
import Button from "@/components/atoms/button";
import "keen-slider/keen-slider.min.css";

const projectsData = [
  {
    key: 1,
    title: "Proyek A",
    location: "",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ornare orci amet ut nunc tempor consectetur libero. Lectus nisl morbi libero convallis vel ipsum. Quisque donec diam odio adipiscing cursus aliquam vel. At turpis nec felis sed enim. Donec velit nunc et adipiscing sit diam bibendum nunc mi. Ullamcorper nulla id a non. Ipsum lacus vivamus vitae maecenas varius. Suspendisse sagittis suspendisse cras in tempor non nunc ultricies tristique. ",
    image: projectA,
  },
  {
    key: 2,
    title: "Proyek B",
    location: "",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ornare orci amet ut nunc tempor consectetur libero. Lectus nisl morbi libero convallis vel ipsum. Quisque donec diam odio adipiscing cursus aliquam vel. At turpis nec felis sed enim. Donec velit nunc et adipiscing sit diam bibendum nunc mi. Ullamcorper nulla id a non. Ipsum lacus vivamus vitae maecenas varius. Suspendisse sagittis suspendisse cras in tempor non nunc ultricies tristique. ",
    image: projectB,
  },
];

const Projects = () => {
  return (
    <section id="projects" className={classNames.main}>
      <div className={classNames.content}>
        <div className={classNames["project-porto"]}>
          <p className={classNames.title}>Proyek & Portofolio</p>
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
              objectFit="cover"
            />
          </div>
          <div className={classNames["other-porto"]}>
            <div>
              <Image
                src={projectPorto2}
                className={classNames.img}
                alt="images"
                fill
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src={projectPorto2}
                className={classNames.img}
                alt="images"
                fill
                objectFit="cover"
              />
            </div>
          </div>
          <Button className={classNames.button}>Lihat Semua</Button>
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
                  objectFit="cover"
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
