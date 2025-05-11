export interface NavbarData {
  key: string;
  name: string;
  path: string;
  items?: NavbarData[];
}

export const navbarData: NavbarData[] = [
  {
    key: "home",
    name: "navbar.home",
    path: "/",
  },
  {
    key: "services",
    name: "navbar.services",
    path: "/services",
  },
  {
    key: "projects",
    name: "navbar.projects",
    path: "/projects",
  },
  {
    key: "clients",
    name: "navbar.clients",
    path: "/clients",
  },
  {
    key: "news",
    name: "navbar.news",
    path: "/news",
  },
  {
    key: "certificates",
    name: "navbar.certificates",
    path: "/certificates",
  },
  {
    key: "about",
    name: "navbar.about",
    path: "/about",
  },
];
