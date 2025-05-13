import { FC } from "react";
import classNames from "./project-card.module.scss";
import Image, { StaticImageData } from "next/image";
import Map from "@/assets/icons/map.svg";
import clsx from "clsx";

type ProjectCardProps = {
  data: {
    title: string;
    location: string;
    description: string;
    image: StaticImageData;
  };
  className?: string;
};

const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { image, description, title } = props.data;
  return (
    <div className={clsx(classNames.main, props.className)}>
      <div className={classNames.image}>
        <Image
          src={image}
          className={classNames.img}
          alt="images"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className={classNames.title}>{title}</p>
      <button className={classNames.location}>
        <Map className={classNames.icon} />
        <p>Lihat Lokasi</p>
      </button>
      <p className={classNames.description}>{description}</p>
    </div>
  );
};
export default ProjectCard;
