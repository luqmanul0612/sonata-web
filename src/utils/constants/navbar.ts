export interface NavbarData {
  name: string;
  path: string;
  hash?: string;
  items?: NavbarData[];
}

export const navbarData: NavbarData[] = [
  {
    name: "home",
    path: "/",
    hash: "home",
  },
  {
    name: "services",
    path: "/",
    hash: "services",
  },
  {
    name: "projects",
    path: "/",
    hash: "projects",
  },
  {
    name: "clients",
    path: "/",
    hash: "clients",
  },
  {
    name: "news",
    path: "/",
    hash: "news",
  },
  {
    name: "certificates",
    path: "/",
    hash: "certificates",
  },
  {
    name: "about",
    path: "/",
    hash: "about",
  },
];
