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
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import ReactGA from 'react-ga4';

import AdminLayout from "layouts/Admin/Admin.js";
import CustomerLayout from "layouts/Customer/Customer.js";
// import RTLLayout from "layouts/RTL/RTL.js";


import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
if (process.env.REACT_APP_TRACKING_ID) {
  ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
} else {
  console.warn("Tracking ID is missing or undefined.");
}

//ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);

const Analytics = () => {
  console.log(process.env.REACT_APP_TRACKING_ID)
  const location = useLocation(); 
  React.useEffect(() => {
    console.log(location.pathname + location.search)
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
      title: location.pathname,
      location: window.location.href,
    });

  }, [location]);
  return null;
};


root.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <BrowserRouter >
        <Analytics />
        <Routes>
          {/* <Route path="/admin/*" element={<AdminLayout />} /> */}
          {/* <Route path="/rtl/*" element={<RTLLayout />} /> */}
          <Route path="*" element={<CustomerLayout />} />
        </Routes>
      </BrowserRouter>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>
);
