import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar.js";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("admin-dashboard");
  }, []);

  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default AdminDashboard;
