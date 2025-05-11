"use client";

import classNames from "./offers.module.scss";
import GetQuote from "@/components/molecules/get-quote";

const Offers = () => {
  return (
    <div className={classNames.main}>
      <div className={classNames.content}>
        <GetQuote />
      </div>
    </div>
  );
};

export default Offers;
