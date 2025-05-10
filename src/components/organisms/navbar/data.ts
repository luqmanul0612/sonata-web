export interface NavbarData {
  key: string;
  name: string;
  path: string;
  highlight?: string | null;
  items?: NavbarData[];
}

export const navbarData: NavbarData[] = [
  {
    key: "home",
    name: "navbar.home",
    path: "/",
    highlight: "home",
  },
  {
    key: "services",
    name: "navbar.services",
    path: "/services",
    highlight: null,
  },
  {
    key: "projects",
    name: "navbar.projects",
    path: "/",
    highlight: "projects",
  },
  {
    key: "clients",
    name: "navbar.clients",
    path: "/clients",
    highlight: null,
  },
  {
    key: "news",
    name: "navbar.news",
    path: "/",
    highlight: "news",
  },
  {
    key: "certificates",
    name: "navbar.certificates",
    path: "/certificates",
    highlight: null,
  },
  {
    key: "about",
    name: "navbar.about",
    path: "/",
    highlight: "about",
  },
];
