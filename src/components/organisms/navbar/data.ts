export interface NavbarData {
  name: string;
  path: string;
  hash?: string;
  items?: NavbarData[];
}

export const navbarData: NavbarData[] = [
  {
    name: "navbar.home",
    path: "/",
    hash: "home",
  },
  {
    name: "navbar.services",
    path: "/",
    hash: "services",
  },
  {
    name: "navbar.projects",
    path: "/",
    hash: "projects",
  },
  {
    name: "navbar.clients",
    path: "/",
    hash: "clients",
  },
  {
    name: "navbar.news",
    path: "/",
    hash: "news",
  },
  {
    name: "navbar.certificates",
    path: "/",
    hash: "certificates",
  },
  {
    name: "navbar.about",
    path: "/",
    hash: "about",
  },
];
