"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import useColorScheme from "@/utils/state/colorScheme";
import { motion, AnimatePresence } from "framer-motion";
import Moon from "@/assets/icons/moon.svg";
import Sun from "@/assets/icons/sun.svg";
import classNames from "./theme-switcher.module.scss";
import { FC, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";

const ThemeSwitcher: FC = () => {
  const { t } = useTranslation();
  const { colorScheme, setColorScheme } = useColorScheme((state) => state);

  useLayoutEffect(() => {
    const systemColorScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const isDark = systemColorScheme.matches;
    const storage = JSON.parse(localStorage.getItem("color-scheme") || "{}");
    if (!storage?.state?.colorScheme)
      setColorScheme({ colorScheme: isDark ? "dark" : "light" });
    document.body.classList.add(
      storage?.state?.colorScheme ?? (isDark ? "dark" : "light")
    );
  }, []);

  return (
    <div
      className={classNames.main}
      onClick={() =>
        setColorScheme({
          colorScheme: colorScheme === "light" ? "dark" : "light",
        })
      }
    >
      <AnimatePresence mode="sync">
        {colorScheme === "light" ? (
          <motion.div
            key="light"
            initial={{ y: colorScheme === "light" ? 77 : "-50%" }}
            animate={{ y: colorScheme === "light" ? "-50%" : 77 }}
            exit={{ y: colorScheme === "light" ? -77 : "-50%" }}
            className={classNames.switcher}
          >
            <p className={classNames.label}>{t("Light")}</p>
            <Sun className={classNames.sun} />
          </motion.div>
        ) : (
          <motion.div
            key="dark"
            initial={{ y: colorScheme === "dark" ? 77 : "-50%" }}
            animate={{ y: colorScheme === "dark" ? "-50%" : 77 }}
            exit={{ y: colorScheme === "dark" ? -77 : "-50%" }}
            className={classNames.switcher}
          >
            <p className={classNames.label}>{t("Dark")}</p>
            <Moon className={classNames.moon} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
