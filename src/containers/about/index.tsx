"use client";

import Image from "next/image";
import classNames from "./about.module.scss";
import mainImage from "@/assets/images/about/about-main-image.svg?url";

const AboutContainer = () => {
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
      </div>
    </div>
  );
};

export default AboutContainer;
