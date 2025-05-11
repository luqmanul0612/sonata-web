"use client";

import classNames from "./main-slider.module.scss";
import "keen-slider/keen-slider.min.css";
import clsx from "clsx";
import Image from "next/image";
import Slider1 from "@/assets/images/home/main-slider-1.webp";
import Slider2 from "@/assets/images/home/main-slider-2.webp";
import Slider3 from "@/assets/images/home/main-slider-3.webp";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/atoms/button";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "nextjs-toploader/app";

const sliders = [Slider1, Slider2, Slider3];

const MainSlider = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const interval = useRef<NodeJS.Timeout>(null);
  const router = useRouter();

  const resetInterval = () => {
    clearInterval(interval.current as unknown as number);
    interval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliders.length);
    }, 5000);
  };

  useEffect(() => {
    setIsMounted(true);
    interval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliders.length);
    }, 5000);
    return () => clearInterval(interval.current as unknown as number);
  }, []);

  return (
    <section id="home" className={classNames.main}>
      <div className={clsx(classNames["slider-content"])}>
        <AnimatePresence mode="sync">
          {sliders.map((item, idx) =>
            currentSlide === idx ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: isMounted ? 1 : 0.2 }}
                key={idx}
                className={classNames.image}
              >
                <Image
                  fill
                  src={item}
                  alt="slider"
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
        <div className={classNames.content}>
          <p className={classNames.title}>
            {t("Building the Future with Natural Resources")}
          </p>
          <p className={classNames.description}>
            {t("#Integrated solutions from exploration to distribution")}
          </p>
          <div className={classNames["button-group"]}>
            <Button onClick={() => router.push("/services")}>
              {t("Our Services")}
            </Button>
            <Button variant="secondary-white">{t("Contact Us")}</Button>
          </div>
        </div>
      </div>
      <div className={classNames.navigation}>
        {sliders.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => {
                setCurrentSlide(idx);
                resetInterval();
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
    </section>
  );
};

export default MainSlider;
