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
import ReactGA from 'react-ga';

import AdminLayout from "layouts/Admin/Admin.js";
import CustomerLayout from "layouts/Customer/Customer.js";
// import RTLLayout from "layouts/RTL/RTL.js";


import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));

ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);

const Analytics = () => {

  const location = useLocation();
  React.useEffect(() => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname + location.search);
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
