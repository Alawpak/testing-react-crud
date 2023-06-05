import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import useTheme from "theme/useTheme";

import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Auth } from "layouts/Auth";
import { Admin } from "layouts/Admin";

export const AppRouter = () => {
  const theme = useTheme("light");

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/*"
          element={
            <PublicRoute>
              <Routes>
                <Route path="/*" element={<Auth />} />
              </Routes>
            </PublicRoute>
          }
        />

        {/* <Route
          path="/*"
          element={
            <PublicRoute>
              <ClientRoutes /> this is for clients
            </PublicRoute>
          }
        /> */}

        <Route
          path="admin/*"
          element={
            <PrivateRoute>
              <Routes>
                <Route path="/*" element={<Admin />}></Route>
              </Routes>
            </PrivateRoute>
          }
        />
      </Routes>
    </ThemeProvider>
  );
};
