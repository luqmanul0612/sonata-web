"use client";

import { useTranslation } from "react-i18next";
import classNames from "./location.module.scss";
import LocationIcon from "@/assets/icons/location.svg";
import Image from "next/image";
import mapExample from "@/assets/images/map-example.jpg";

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
                " : Jl. Tebet Barat Dalam Raya No.6, RT.11/RW.2, Tebet Bar., Kec.Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12940"
              }
            </span>
          </p>
        </div>
        <div className={classNames.map}>
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
