import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.js";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("admin-dashboard");
     // eslint-disable-next-line
  }, []);

  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default AdminDashboard;
