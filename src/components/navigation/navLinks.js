import {
  faHome,
  faUser,
  faAddressBook,
  faBrain,
  faFolderOpen,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

export const navLinks = [
  {
    text: "Home",
    path: "/",
    icon: faHome,
  },
  {
    text: "About",
    path: "/about",
    icon: faUser,
  },
  {
    text: "Projects",
    path: "/projects",
    icon: faFolderOpen,
  },
  {
    text: "Skills",
    path: "/skills",
    icon: faBrain,
  },
  {
    text: "Resume",
    path: "/resume",
    icon: faAddressCard,
  },
  {
    text: "Contact",
    path: "/contact",
    icon: faAddressBook,
  },
];
