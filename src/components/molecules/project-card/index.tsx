import { FC, MouseEventHandler } from "react";
import classNames from "./project-card.module.scss";
import Image, { StaticImageData } from "next/image";
import Map from "@/assets/icons/map.svg";
import clsx from "clsx";
import { useRouter } from "nextjs-toploader/app";

type ProjectCardProps = {
  data: {
    key: string;
    title: string;
    location: string;
    description: string;
    image: StaticImageData;
  };
  className?: string;
  category?: string;
};

const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { image, description, title, key } = props.data;
  const router = useRouter();

  const onClickMap: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
  };

  const onClickCard = () => {
    const params = new URLSearchParams();
    if (props.category) params.set("category", props.category);
    router.push(`/projects/${key}?${params.toString()}`);
  };

  return (
    <div
      className={clsx(classNames.main, props.className)}
      onClick={onClickCard}
    >
      <div className={classNames.image}>
        <Image
          src={image}
          className={classNames.img}
          alt="images"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={classNames.info}>
        <p className={classNames.title}>{title}</p>
        <button className={classNames.location} onClick={onClickMap}>
          <Map className={classNames.icon} />
          <p>Lihat Lokasi</p>
        </button>
        <p className={classNames.description}>{description}</p>
      </div>
    </div>
  );
};
export default ProjectCard;
