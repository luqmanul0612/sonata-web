"use client";

import classNames from "./language-switcher.module.scss";
import { FC } from "react";
import FlagIdn from "@/assets/images/flag-idn.svg";
import FlagEng from "@/assets/images/flag-eng.svg";
import { useTranslation } from "react-i18next";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import * as Popover from "@radix-ui/react-popover";

const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation();
  return (
    <div className={classNames.main}>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className={classNames.button}>
            {i18n.language === "id" ? "IDN" : "ENG"}
            {i18n.language === "id" ? (
              <FlagIdn className={classNames.flag} />
            ) : (
              <FlagEng className={classNames.flag} />
            )}
            <ArrowDown className={classNames.arrow} />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className={classNames.PopoverContent} sideOffset={5}>
            <div className={classNames.itemWrapper}>
              <Popover.Close aria-label="Close" asChild>
                <div
                  className={classNames.item}
                  onClick={() => i18n.changeLanguage("id")}
                >
                  <span>IDN</span>
                  <FlagIdn className={classNames.flag} />
                </div>
              </Popover.Close>
              <Popover.Close aria-label="Close" asChild>
                <div
                  className={classNames.item}
                  onClick={() => i18n.changeLanguage("en")}
                >
                  <span>ENG</span>
                  <FlagEng className={classNames.flag} />
                </div>
              </Popover.Close>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export default LanguageSwitcher;
