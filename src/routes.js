/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Home from "views/Customer/Home.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Inventory from "views/Inventory";
import Packages from "views/Packages";
import Theme from "views/Customer/Theme";
import Book from "views/Customer/Book";
import Inquiry from "views/Customer/Inquiry";
import AboutUs from "views/Customer/AboutUs";
import Price from "views/Customer/Price";

var routes = [
  {
    path: "/Home",
    name: "Home",
    icon: "tim-icons icon-chart-pie-36",
    component: <Home />,
    layout: "",
    customer: true,
  },
  {
    path: "/theme/:themeName",
    name: "Themes",
    customer: true,
    component: <Theme />,
    layout: "",
  },
  {
    path: "/aboutus",
    name: "About Us",
    customer: true,
    component: <AboutUs />,
    layout: "",
  },
  // {
  //   path: "/price",
  //   name: "Price",
  //   customer: true,
  //   component: <Price />,
  //   layout: "",
  // },
  {
    path: "/book",
    name: "Book",
    icon: "tim-icons icon-chart-pie-36",
    component: <Inquiry />,
    layout: "",
    customer: true,
  },
  {
    path: "/inventory",
    name: "inventory",
    icon: "tim-icons icon-app",
    component: <Inventory />,
    layout: "/admin",
  },
  {
    path: "/Package",
    name: "Package",
    rtlName: "طباعة",
    icon: "tim-icons icon-basket-simple",
    component: <Packages />,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/map",
    name: "Map",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: <Map />,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: <Notifications />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: <UserProfile />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: <Typography />,
    layout: "/admin",
  },
];
export default routes;
