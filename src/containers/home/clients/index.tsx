"use client";

import Image from "next/image";
import classNames from "./clients.module.scss";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import clsx from "clsx";
import { clientsData } from "./data";
import testimonialBg from "@/assets/images/testimonial-bg.jpg";
import ArrowDropLeftLine from "@/assets/icons/arrow-drop-left-line.svg";
import ArrowDropRightLine from "@/assets/icons/arrow-drop-right-line.svg";
import { useTranslation } from "react-i18next";

const Clients = () => {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [perView, setPerView] = useState(0);
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints: {
        "(min-width: 640px)": {
          slides: {
            origin: "auto",
            perView: 2,
            spacing: 20,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 3,
            spacing: 20,
          },
        },
      },
      initial: 0,
      loop: true,
      slides: {
        origin: "auto",
        perView: 1,
        spacing: 20,
      },
      vertical: false,
      created(s) {
        setLoaded(true);
        setPerView(
          (
            s.options.slides as unknown as {
              perView: number;
            }
          )?.perView || 0
        );
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      updated(s) {
        setPerView(
          (
            s.options.slides as unknown as {
              perView: number;
            }
          )?.perView || 0
        );
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
            slider.moveToIdx(
              slider.track.details.rel +
                (
                  slider.options.slides as unknown as {
                    perView: number;
                  }
                )?.perView || 1
            );
          }, 5000);
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
    <section id="clients" className={classNames.main}>
      <div className={classNames.bg}>
        <Image
          src={testimonialBg}
          alt="images"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={classNames.content}>
        <p className={classNames.title}>{t("Testimonials & Clients")}</p>
        <div className={classNames["testimonial-wrapper"]}>
          <button
            className={classNames.prev}
            onClick={() =>
              instanceRef.current?.moveToIdx(currentSlide - perView)
            }
          >
            <ArrowDropLeftLine />
          </button>
          <div
            className={clsx(classNames["testimonials"], {
              [classNames.loaded]: loaded,
            })}
          >
            <div ref={ref} className="keen-slider" style={{ height: "100%" }}>
              {clientsData.map((item) => (
                <div key={item.key} className="keen-slider__slide">
                  <div className={classNames.testimonial}>
                    <div className={classNames.user}>
                      <div className={classNames.image}>
                        <Image
                          src={item.image}
                          className={classNames.img}
                          alt="images"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className={classNames.info}>
                        <p className={classNames.name}>{item.name}</p>
                        <p className={classNames.position}>{item.position}</p>
                        <p className={classNames.company}>{item.company}</p>
                      </div>
                    </div>
                    <div className={classNames.message}>
                      <p>&quot;{item.message}&quot;</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className={classNames.next}
            onClick={() =>
              instanceRef.current?.moveToIdx(currentSlide + perView)
            }
          >
            <ArrowDropRightLine />
          </button>
        </div>
        {loaded && instanceRef.current && (
          <div className={classNames.navigation}>
            {[
              ...Array(
                Math.ceil(
                  instanceRef.current.track.details.slides.length / perView
                )
              ).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx * perView);
                  }}
                  className={clsx(classNames.dot, {
                    [classNames.active]:
                      currentSlide === idx * perView ||
                      (currentSlide >= idx * perView &&
                        currentSlide < idx * perView + perView),
                    [classNames.sm]:
                      instanceRef.current!.track.details.slides.length /
                        perView >
                      40,
                    [classNames.md]:
                      instanceRef.current!.track.details.slides.length /
                        perView <=
                        20 &&
                      instanceRef.current!.track.details.slides.length /
                        perView >
                        4,
                    [classNames.lg]:
                      instanceRef.current!.track.details.slides.length /
                        perView <=
                      4,
                  })}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Clients;
