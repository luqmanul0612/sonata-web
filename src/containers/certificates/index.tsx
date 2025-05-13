"use client";

import { useTranslation } from "react-i18next";
import classNames from "./certificates.module.scss";
import { certificatesData } from "./data";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import dayjs from "dayjs";
import "keen-slider/keen-slider.min.css";
import ArrowDropLeftLine from "@/assets/icons/arrow-drop-left-line.svg";
import ArrowDropRightLine from "@/assets/icons/arrow-drop-right-line.svg";
import clsx from "clsx";

const yearList = new Array(10)
  .fill(0)
  .map((_, i) => String(dayjs().year() - 9 + i));

const CertificatesContainer = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [perView, setPerView] = useState(0);
  const [year, setYear] = useState(dayjs().year().toString());

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: dayjs().year(),
    breakpoints: {
      "(min-width: 385px)": {
        slides: {
          origin: "auto",
          perView: 3,
          spacing: 10,
        },
      },
      "(min-width: 520px)": {
        slides: {
          origin: "auto",
          perView: 4,
          spacing: 10,
        },
      },
      "(min-width: 810px)": {
        slides: {
          origin: "auto",
          perView: 5,
          spacing: 20,
        },
      },
      "(min-width: 920px)": {
        slides: {
          origin: "auto",
          perView: 6,
          spacing: 20,
        },
      },
      "(min-width: 1080px)": {
        slides: {
          origin: "auto",
          perView: 8,
          spacing: 20,
        },
      },
    },
    slides: {
      origin: "auto",
      perView: 2,
      spacing: 10,
    },
    created(s) {
      setCurrentSlide(s.track.details.rel);
      setPerView(
        (
          s.options.slides as unknown as {
            perView: number;
          }
        )?.perView || 0
      );
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
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
  });

  const itemList = certificatesData[year] ?? [];

  const onClickYear = (itemYear: string) => {
    setYear(itemYear);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={classNames.main}>
      <div className={classNames.content}>
        <p className={classNames.title}>{t("Sertifikat & Penghargaan")}</p>
        <div className={classNames["certificates-wrapper"]}>
          {!itemList.length && (
            <div className={classNames.empty}>
              <p className={classNames.text}>{t("No Data")}</p>
            </div>
          )}
          {itemList.map((item) => (
            <div className={classNames.certificate} key={item.key}>
              <div className={classNames.image}>
                <Image
                  src={item.image}
                  alt="images"
                  fill
                  style={{ objectFit: "cover" }}
                  className={classNames.img}
                />
              </div>
              <div className={classNames.info}>
                <p className={classNames.title}>{item.title}</p>
                <p className={classNames.date}>{item.date}</p>
                <p className={classNames.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={classNames.navigation}>
          <button
            className={classNames.prev}
            onClick={() => instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          >
            <ArrowDropLeftLine />
          </button>
          <div ref={ref} className="keen-slider">
            {yearList.map((itemYear) => (
              <div key={itemYear} className="keen-slider__slide">
                <button
                  className={clsx(classNames.year, {
                    [classNames.active]: itemYear === year,
                  })}
                  onClick={() => onClickYear(itemYear)}
                >
                  {itemYear}
                </button>
              </div>
            ))}
          </div>
          <button
            className={classNames.next}
            onClick={() => instanceRef.current?.next()}
            disabled={currentSlide === yearList.length - perView}
          >
            <ArrowDropRightLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificatesContainer;
