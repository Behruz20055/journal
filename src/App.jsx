import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Aos from "aos";

import AdminLayout from "./dashboard/shared/layout/AdminLayout";
import Layout from "./shared/layout/Layout";
import AuthLayout from "./auth/AuthLayout";

import { adminRoutes } from "./shared/routes/configs/adminRoutes";
import { studentRoutes } from "./shared/routes/configs/studentRoutes";

import "./shared/assets/global.css";

const App = () => {
  const location = useLocation();
  const { pathname } = location;

  const handleDisplayLayouts = () =>
    ({
      admin: <AdminLayout routes={adminRoutes} />,
      student: <AdminLayout routes={studentRoutes} />,
      auth: <AuthLayout />,
    }[["admin", "student", "auth"].find((key) => pathname.includes(key))] || (
      <Layout />
    ));

  useEffect(() => {
    Aos.init({
      duration: 1000,
      mirror: true,
      once: false,
    });
  }, []);

  return <div className="App">{handleDisplayLayouts()}</div>;
};

export default App;
