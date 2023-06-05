import { Dashboard, Orders } from "modules";
import { Navigate, Route, Routes } from "react-router-dom";

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="home" />} />
      <Route path="orders" element={<Orders />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
};
