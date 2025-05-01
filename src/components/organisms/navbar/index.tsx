"use client";

import { AlignRight, ChevronDown, X } from "lucide-react";
import classNames from "./navbar.module.scss";
import Logo from "@/assets/icons/logo.svg";
import LogoDark from "@/assets/icons/logo-dark.svg";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React, { FC, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import * as Dialog from "@radix-ui/react-dialog";
import * as Collapsible from "@radix-ui/react-collapsible";
import { NavbarData, navbarData } from "@/utils/constants/navbar";
import ThemeSwitcher from "@/components/atoms/theme-switcher";
import useColorScheme from "@/utils/state/colorScheme";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/atoms/language-switcher";

const Navbar = () => {
  const router = useRouter();
  const { colorScheme } = useColorScheme((state) => state);
  const { scrollY } = useScrollPosition();
  const [activeHash, setActiveHash] = useState("home");

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
      <div className={classNames.content}>
        <div className={classNames.logo} onClick={() => router.push("/")}>
          {colorScheme === "light" ? <Logo /> : <LogoDark />}
        </div>
        <MobileMenu />
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
      </div>
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
          {t(props.name)} <ChevronDown size={18} aria-hidden />
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

const MobileMenu = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild className={classNames.mobileMenuTrigger}>
        <button>
          <AlignRight size={28} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={classNames.DialogOverlay} />
        <Dialog.Content className={classNames.DialogContent}>
          <Dialog.Title style={{ display: "none" }} />
          <Dialog.Description style={{ display: "none" }} />
          <div className={classNames.menu}>
            {navbarData.map((item) => (
              <MobileMenuItem
                key={item.path + (item.hash ?? "")}
                {...item}
                onClose={() => setOpen(false)}
              />
            ))}
          </div>
          <Dialog.Close asChild>
            <button className={classNames.IconButton} aria-label="Close">
              <X size={30} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

type MobileMenuItemProps = NavbarData & {
  onClose: () => void;
  className?: string;
};
const MobileMenuItem: FC<MobileMenuItemProps> = (props) => {
  const router = useRouter();
  const onClickItem = () => {
    if (!props.items?.length) {
      router.push(props.path);
      props.onClose();
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
            {!!props.items?.length && <ChevronDown size={20} aria-hidden />}
            <div>{props.name}</div>
          </div>
        </Collapsible.Trigger>
        <Collapsible.Content className={classNames.mobileMenuContent}>
          <div>
            {props.items?.map((subItem) => (
              <MobileMenuItem
                key={subItem.path}
                {...subItem}
                className={classNames.subItem}
                onClose={props.onClose}
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
      {!!props.items?.length && <ChevronDown size={20} aria-hidden />}
      <div>{props.name}</div>
    </div>
  );
};
