"use client";

import classNames from "./navbar.module.scss";
import Logo from "@/assets/icons/logo.svg";
import LogoDark from "@/assets/icons/logo-dark.svg";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React, { FC, forwardRef, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import * as Collapsible from "@radix-ui/react-collapsible";
import { NavbarData, navbarData } from "@/components/organisms/navbar/data";
import ThemeSwitcher from "@/components/atoms/theme-switcher";
import useColorScheme from "@/utils/state/colorScheme";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/atoms/language-switcher";
import Menu from "@/assets/icons/menu.svg";
import ChevronDown from "@/assets/icons/chevron-down.svg";
import * as Popover from "@radix-ui/react-popover";
import { useRouter } from "nextjs-toploader/app";

const Navbar = () => {
  const { colorScheme } = useColorScheme((state) => state);
  const { scrollY } = useScrollPosition();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  return (
    <div
      ref={anchorRef}
      className={clsx(classNames.navbar, { [classNames.active]: scrollY > 77 })}
    >
      <div className={classNames["nav-content"]}>
        <div className={classNames.logo} onClick={() => router.push("/")}>
          {colorScheme === "light" ? <Logo /> : <LogoDark />}
        </div>
        <NavigationMenu.Root className={classNames.NavigationMenuRoot}>
          <NavigationMenu.List className={classNames.NavigationMenuList}>
            {navbarData.map((item) => (
              <NavigationMenuItem key={item.key} data={item} />
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
          onClick={() => setOpen(true)}
          style={{ pointerEvents: open ? "none" : "all" }}
        >
          <Menu />
        </button>
      </div>
      <MobileMenuContainer open={open} setOpen={setOpen} ref={anchorRef} />
    </div>
  );
};

export default Navbar;

type NavigationMenuItemProps = {
  data: NavbarData;
};

const NavigationMenuItem: FC<NavigationMenuItemProps> = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useTranslation("common");
  const onClickItem = () => {
    if (!props.data.items?.length) {
      router.push(props.data.path);
    }
  };

  const isActive = props.data.path === pathname;

  if (props.data.items?.length)
    return (
      <NavigationMenu.Item className={classNames.NavigationMenuItem}>
        <NavigationMenu.Trigger
          className={clsx(classNames.NavigationMenuTrigger, {
            [classNames.active]: isActive,
          })}
        >
          {t(props.data.name)} <ChevronDown aria-hidden />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content className={classNames.NavigationMenuContent}>
          <ul className={classNames.ListWrapper}>
            {props.data.items?.map((subItem) => (
              <ListItem
                key={subItem.key}
                name={subItem.name}
                path={subItem.path}
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
      <a onClick={onClickItem}>{t(props.data.name)}</a>
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

const MobileMenuContainer = forwardRef<
  HTMLDivElement,
  { open: boolean; setOpen: (open: boolean) => void }
>((props, ref) => {
  const { scrollY } = useScrollPosition();
  return (
    <Popover.Root open={props.open} onOpenChange={props.setOpen}>
      <Popover.Anchor asChild>
        <div ref={ref} />
      </Popover.Anchor>
      <Popover.Portal>
        <Popover.Content
          side="bottom"
          align="start"
          className={classNames.PopoverContent}
        >
          <div
            className={clsx(classNames["mobile-menu-container"], {
              [classNames.active]: scrollY > 77,
            })}
          >
            <div className={classNames.menu}>
              {navbarData.map((item) => (
                <MobileMenuItem
                  setOpen={props.setOpen}
                  key={item.key}
                  data={item}
                />
              ))}
            </div>
            <div className={classNames.actions}>
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
});

MobileMenuContainer.displayName = "MobileMenuContainer";

type MobileMenuItemProps = {
  className?: string;
  data: NavbarData;
  setOpen: (open: boolean) => void;
};
const MobileMenuItem: FC<MobileMenuItemProps> = (props) => {
  const router = useRouter();
  const { t } = useTranslation();
  const onClickItem = () => {
    if (!props.data.items?.length) {
      router.push(props.data.path);
      props.setOpen(false);
    }
  };
  if (props.data.items?.length)
    return (
      <Collapsible.Root className={classNames.mobileMenuItemCollapible}>
        <Collapsible.Trigger asChild>
          <div
            className={clsx(classNames.mobileMenuItem, props.className)}
            onClick={onClickItem}
          >
            {!!props.data.items?.length && <ChevronDown aria-hidden />}
            <div>{t(props.data.name)}</div>
          </div>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <div>
            {props.data.items?.map((subItem) => (
              <MobileMenuItem
                key={subItem.key}
                className={classNames.subItem}
                setOpen={props.setOpen}
                data={subItem}
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
      {!!props.data.items?.length && <ChevronDown aria-hidden />}
      <div>{t(props.data.name)}</div>
    </div>
  );
};
