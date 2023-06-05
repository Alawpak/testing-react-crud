import { Login } from "modules";
import { Navigate, Route, Routes } from "react-router-dom";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="login" />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};
