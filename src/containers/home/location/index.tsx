"use client";

import { useTranslation } from "react-i18next";
import classNames from "./location.module.scss";
import LocationIcon from "@/assets/icons/location.svg";
import Image from "next/image";
import mapExample from "@/assets/images/map-example.webp";

const Location = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames.main}>
      <div className={classNames.content}>
        <div className={classNames.title}>
          <LocationIcon className={classNames.icon} />
          <p className={classNames.text}>
            {t("location_name", { name: "PT Sonata Resources Indonesia" })}
            <span>
              {
                " : Sahid Sudirman Center, 56th Floor Jl. Jend. Sudirman No.86 Jakarta 10220, Indonesia"
              }
            </span>
          </p>
        </div>
        <div
          className={classNames.map}
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/CEO+SUITE+Sahid+Sudirman+Center+56th+fl/@-6.2111015,106.8186936,18z/data=!4m6!3m5!1s0x2e69f4026d88f493:0x8ad09c612d1b433c!8m2!3d-6.2109275!4d106.8185581!16s%2Fg%2F11cryvb8b8?entry=ttu&g_ep=EgoyMDI1MDYxMC4xIKXMDSoASAFQAw%3D%3D"
            )
          }
        >
          <Image
            src={mapExample}
            className={classNames.img}
            alt="map"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
