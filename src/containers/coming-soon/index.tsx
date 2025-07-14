"use client";

import Button from "@/components/atoms/button";
import classNames from "./coming-soon.module.scss";
import { useRouter } from "nextjs-toploader/app";

const ComingSoonContainer = () => {
  const navigate = useRouter();
  return (
    <div className={classNames.main}>
      <div className={classNames.content}>
        <div className={classNames.circle}></div>
        <p className={classNames.coming}>COMING</p>
        <p className={classNames.soon}>SOON...</p>
        <p className={classNames.text}>We are working on this page</p>
        <Button onClick={() => navigate.back()}>Back</Button>
      </div>
    </div>
  );
};

export default ComingSoonContainer;
