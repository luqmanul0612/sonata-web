import Image from "next/image";
import classNames from "./services.module.scss";
import mainServiceImage from "@/assets/images/services/main-services-image.jpg";

const ServicesContainer = () => {
  return (
    <div className={classNames.main}>
      <div className={classNames.content}>
        <div className={classNames["main-image"]}>
          <div className={classNames.image}>
            <Image
              src={mainServiceImage}
              alt="images"
              fill
              className={classNames.img}
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className={classNames.text}>
            Lorem ipsum dolor sit amet consectetur. Ornare orci amet ut nunc
            tempor consectetur libero. Lectus nisl morbi libero convallis vel
            ipsum. Quisque donec diam odio adipiscing cursus aliquam vel. At
            turpis nec felis sed enim. Donec velit nunc et adipiscing sit diam
            bibendum nunc mi. Ullamcorper nulla id a non. Ipsum lacus vivamus
            vitae maecenas varius. Suspendisse sagittis suspendisse cras in
            tempor non nunc ultricies tristique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesContainer;
