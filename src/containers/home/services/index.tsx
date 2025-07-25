"use client";

import Image from "next/image";
import classNames from "./services.module.scss";
import mainService from "@/assets/images/home/services-main.webp";
import Button from "@/components/atoms/button";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import clsx from "clsx";
import { subserviceData } from "./data";
import { useTranslation } from "react-i18next";
import { useRouter } from "nextjs-toploader/app";

const Services = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      breakpoints: {
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 20 },
          vertical: true,
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
          <p className={classNames.title}>{t("Main Services")}</p>
          <p className={classNames.description}>{t("sevices_desc")}</p>
          <div className={classNames.image}>
            <Image
              src={mainService}
              className={classNames.img}
              alt="images"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <Button
            className={classNames.button}
            onClick={() => router.push("/services")}
          >
            {t("See All")}
          </Button>
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
                      style={{ objectFit: "cover" }}
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
