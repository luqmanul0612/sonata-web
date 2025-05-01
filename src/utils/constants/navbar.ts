export interface NavbarData {
  name: string;
  path: string;
  hash?: string;
  items?: NavbarData[];
}

export const navbarData: NavbarData[] = [
  {
    name: "navbar_home",
    path: "/",
    hash: "home",
  },
  {
    name: "navbar_services",
    path: "/",
    hash: "services",
  },
  {
    name: "navbar_projects",
    path: "/",
    hash: "projects",
  },
  {
    name: "navbar_clients",
    path: "/",
    hash: "clients",
  },
  {
    name: "navbar_news",
    path: "/",
    hash: "news",
  },
  {
    name: "navbar_certificates",
    path: "/",
    hash: "certificates",
  },
  {
    name: "navbar_about",
    path: "/",
    hash: "about",
  },
];
