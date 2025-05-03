"use client";

import classNames from "./main-slider.module.scss";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import clsx from "clsx";
import Image from "next/image";
import Slider1 from "@/assets/images/slider1.jpg";
import Slider2 from "@/assets/images/slider-example1.jpg";
import Slider3 from "@/assets/images/slider-example2.jpg";
import { useState } from "react";
import Button from "@/components/atoms/button";
import { useTranslation } from "react-i18next";

const MainSlider = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <section
      id="home"
      className={clsx(classNames.main, { [classNames.loaded]: loaded })}
    >
      <div ref={sliderRef} className="keen-slider">
        <div className={clsx("keen-slider__slide")}>
          <div className={classNames["slider-content"]}>
            <Image
              fill
              src={Slider1}
              alt="slider"
              style={{ objectFit: "cover" }}
            />
            <div className={classNames.content}>
              <p className={classNames.title}>
                {t("Building the Future with Natural Resources")}
              </p>
              <p className={classNames.description}>
                {t("#Integrated solutions from exploration to distribution")}
              </p>
              <div className={classNames["button-group"]}>
                <Button>{t("Our Services")}</Button>
                <Button variant="secondary-white">{t("Contact Us")}</Button>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx("keen-slider__slide")}>
          <div className={classNames["slider-content"]}>
            <Image
              fill
              src={Slider2}
              alt="slider"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className={clsx("keen-slider__slide")}>
          <div className={classNames["slider-content"]}>
            <Image
              fill
              src={Slider3}
              alt="slider"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className={classNames.navigation}>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={clsx(classNames.dot, {
                  [classNames.active]: currentSlide === idx,
                })}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default MainSlider;
