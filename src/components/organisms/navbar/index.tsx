"use client";

import classNames from "./navbar.module.scss";
import Logo from "@/assets/icons/logo.svg";
import LogoDark from "@/assets/icons/logo-dark.svg";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React, { FC, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import * as Collapsible from "@radix-ui/react-collapsible";
import { NavbarData, navbarData } from "@/utils/constants/navbar";
import ThemeSwitcher from "@/components/atoms/theme-switcher";
import useColorScheme from "@/utils/state/colorScheme";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/atoms/language-switcher";
import Menu from "@/assets/icons/menu.svg";
import ArrorDown from "@/assets/icons/arrow-down.svg";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const router = useRouter();
  const { colorScheme } = useColorScheme((state) => state);
  const { scrollY } = useScrollPosition();
  const [activeHash, setActiveHash] = useState("home");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = document.querySelectorAll("section");
          let current = "";

          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (
              rect.top <= window.innerHeight / 2 &&
              rect.bottom >= window.innerHeight / 2
            ) {
              current = section.id;
            }
          });

          setActiveHash(current);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx(classNames.navbar, { [classNames.active]: scrollY > 90 })}
    >
      <div className={classNames["nav-content"]}>
        <div className={classNames.logo} onClick={() => router.push("/")}>
          {colorScheme === "light" ? <Logo /> : <LogoDark />}
        </div>
        <NavigationMenu.Root className={classNames.NavigationMenuRoot}>
          <NavigationMenu.List className={classNames.NavigationMenuList}>
            {navbarData.map((item) => (
              <NavigationMenuItem
                key={item.path + (item.hash ?? "")}
                activeHash={activeHash}
                {...item}
              />
            ))}
            <NavigationMenu.Indicator
              className={classNames.NavigationMenuIndicator}
            >
              <div className="Arrow" />
            </NavigationMenu.Indicator>
          </NavigationMenu.List>
        </NavigationMenu.Root>
        <div className={classNames.actions}>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
        <button
          className={classNames.mobileMenu}
          onClick={() => setShowMenu(true)}
        >
          <Menu />
        </button>
      </div>
      <AnimatePresence>{showMenu && <MobileMenuContainer />}</AnimatePresence>
    </div>
  );
};

export default Navbar;

type NavigationMenuItemProps = NavbarData & {
  activeHash?: string;
};

const NavigationMenuItem: FC<NavigationMenuItemProps> = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useTranslation("common");
  const onClickItem = () => {
    if (!props.items?.length) {
      if (pathname !== props.path) {
        router.push(props.path);
      } else if (props.hash) {
        const el = document.getElementById(props.hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  const isActive = props.hash
    ? props.hash === props.activeHash && props.path === pathname
    : props.path === pathname;

  if (props.items?.length)
    return (
      <NavigationMenu.Item className={classNames.NavigationMenuItem}>
        <NavigationMenu.Trigger
          className={clsx(classNames.NavigationMenuTrigger, {
            [classNames.active]: isActive,
          })}
        >
          {t(props.name)} <ArrorDown aria-hidden />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content className={classNames.NavigationMenuContent}>
          <ul className={classNames.ListWrapper}>
            {props.items?.map((subItem) => (
              <ListItem
                key={subItem.path + (subItem.hash ?? "")}
                {...subItem}
              />
            ))}
          </ul>
        </NavigationMenu.Content>
      </NavigationMenu.Item>
    );
  return (
    <NavigationMenu.Link
      className={clsx(classNames.NavigationMenuLink, {
        [classNames.active]: isActive,
      })}
      asChild
    >
      <a onClick={onClickItem}>{t(props.name)}</a>
    </NavigationMenu.Link>
  );
};

const ListItem: FC<NavbarData> = (props) => {
  const router = useRouter();
  return (
    <NavigationMenu.Link asChild onClick={() => router.push(props.path)}>
      <li className={classNames.ListItem}>{props.name}</li>
    </NavigationMenu.Link>
  );
};

ListItem.displayName = "ListItem";

const MobileMenuContainer = () => {
  return (
    <motion.div
      initial={{ y: "50px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-50px", opacity: 0 }}
      className={classNames["mobile-menu-container"]}
    >
      <div className={classNames.menu}>
        {navbarData.map((item) => (
          <MobileMenuItem key={item.path + (item.hash ?? "")} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

type MobileMenuItemProps = NavbarData & {
  className?: string;
};
const MobileMenuItem: FC<MobileMenuItemProps> = (props) => {
  const router = useRouter();
  const { t } = useTranslation();
  const onClickItem = () => {
    if (!props.items?.length) {
      router.push(props.path);
    }
  };
  if (props.items?.length)
    return (
      <Collapsible.Root className={classNames.mobileMenuItemCollapible}>
        <Collapsible.Trigger asChild>
          <div
            className={clsx(classNames.mobileMenuItem, props.className)}
            onClick={onClickItem}
          >
            {!!props.items?.length && <ArrorDown aria-hidden />}
            <div>{t(props.name)}</div>
          </div>
        </Collapsible.Trigger>
        <Collapsible.Content className={classNames.mobileMenuContent}>
          <div>
            {props.items?.map((subItem) => (
              <MobileMenuItem
                key={subItem.path}
                {...subItem}
                className={classNames.subItem}
              />
            ))}
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    );
  return (
    <div
      className={clsx(classNames.mobileMenuItem, props.className)}
      onClick={onClickItem}
    >
      {!!props.items?.length && <ArrorDown aria-hidden />}
      <div>{t(props.name)}</div>
    </div>
  );
};
