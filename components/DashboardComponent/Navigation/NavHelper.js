import { RxDashboard } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsChatSquareQuote } from "react-icons/bs";
import { BsCalendarCheck } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

export const navItems = [
  {
    icon: RxDashboard,
    name: "Dashboard",
    href: "/user/dashboard",
  },
  {
    icon: IoIosNotificationsOutline,
    name: "Notification",
    href: "",
  },
  {
    icon: BsChatSquareQuote,
    name: "Chats",
    href: "/user/chats",
  },
  {
    icon: BsCalendarCheck,
    name: "Calendar",
    href: "/user/calendar",
  },
  {
    icon: IoSettingsOutline,
    name: "Settings",
    href: "/user/settings",
  },
];
