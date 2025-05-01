"use client";

import Image from "next/image";
import classNames from "./services.module.scss";
import mainService from "@/assets/images/main-service.jpg";
import subService1 from "@/assets/images/subservice-1.jpg";
import subService2 from "@/assets/images/subservice-2.jpg";
import subService3 from "@/assets/images/subservice-3.jpg";
import subService4 from "@/assets/images/subservice-4.jpg";
import Button from "@/components/atoms/button";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import clsx from "clsx";

const subserviceData = [
  {
    key: 1,
    title: "Dukungan saat Kontruksi",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ornare orci amet ut nunc tempor consectetur libero. Lectus nisl morbi libero convallis vel ipsum. Quisque donec diam odio adipiscing cursus aliquam vel. At turpis nec felis sed enim. Donec velit nunc et adipiscing sit diam bibendum nunc mi. Ullamcorper nulla id a non. Ipsum lacus vivamus vitae maecenas varius. Suspendisse sagittis suspendisse cras in tempor non nunc ultricies tristique. ",
    image: subService1,
  },
  {
    key: 2,
    title: "Survai dan Penempatan",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ornare orci amet ut nunc tempor consectetur libero. Lectus nisl morbi libero convallis vel ipsum. Quisque donec diam odio adipiscing cursus aliquam vel. At turpis nec felis sed enim. Donec velit nunc et adipiscing sit diam bibendum nunc mi. Ullamcorper nulla id a non. Ipsum lacus vivamus vitae maecenas varius. Suspendisse sagittis suspendisse cras in tempor non nunc ultricies tristique. ",
    image: subService2,
  },
  {
    key: 3,
    title: "Teknologi Terbaru",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ornare orci amet ut nunc tempor consectetur libero. Lectus nisl morbi libero convallis vel ipsum. Quisque donec diam odio adipiscing cursus aliquam vel. At turpis nec felis sed enim. Donec velit nunc et adipiscing sit diam bibendum nunc mi. Ullamcorper nulla id a non. Ipsum lacus vivamus vitae maecenas varius. Suspendisse sagittis suspendisse cras in tempor non nunc ultricies tristique. ",
    image: subService3,
  },
  {
    key: 4,
    title: "Aplikasi Warning System",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ornare orci amet ut nunc tempor consectetur libero. Lectus nisl morbi libero convallis vel ipsum. Quisque donec diam odio adipiscing cursus aliquam vel. At turpis nec felis sed enim. Donec velit nunc et adipiscing sit diam bibendum nunc mi. Ullamcorper nulla id a non. Ipsum lacus vivamus vitae maecenas varius. Suspendisse sagittis suspendisse cras in tempor non nunc ultricies tristique. ",
    image: subService4,
  },
];

const Services = () => {
  const [loaded, setLoaded] = useState(false);
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      breakpoints: {
        "(min-width: 900px)": {
          slides: { perView: 3, spacing: 20 },
          vertical: false,
        },
        "(min-width: 1280px)": {
          slides: { perView: 2, spacing: 20 },
          vertical: true,
        },
      },
      slides: {
        origin: "auto",
        perView: 2,
        spacing: 10,
      },
      vertical: false,
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <section id="services" className={classNames.main}>
      <div className={classNames.content}>
        <div className={classNames["main-services"]}>
          <p className={classNames.title}>Layanan Utama</p>
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
              src={mainService}
              className={classNames.img}
              alt="images"
              fill
              objectFit="cover"
            />
          </div>
          <Button className={classNames.button}>Lihat Semua</Button>
        </div>
        <div
          className={clsx(classNames["sub-services"], {
            [classNames.loaded]: loaded,
          })}
        >
          <div ref={ref} className="keen-slider" style={{ height: "100%" }}>
            {subserviceData.map((item) => (
              <div key={item.key} className="keen-slider__slide">
                <div className={classNames["sub-service"]}>
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
                  <p className={classNames.description}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
