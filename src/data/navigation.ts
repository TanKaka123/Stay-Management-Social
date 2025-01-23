import { NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";
import __megamenu from "./jsons/__megamenu.json";

const demoChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Online booking",
  },
];

const templatesChildrenMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Add Stay",
  },
  //
  { id: ncNanoId(), href: "/checkout", name: "Checkout" },
  //
  { id: ncNanoId(), href: "/account", name: "Account page" },
];

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/social",
    name: "Social",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "To do",
    type: "dropdown",
    children: templatesChildrenMenus,
  },
];