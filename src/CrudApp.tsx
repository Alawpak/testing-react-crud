import { AppRouter } from "Routes/routes";
import AuthProvider from "context/Auth/AuthProvider";

const CrudApp = () => (
  <AuthProvider>
    <AppRouter />
  </AuthProvider>
);

export default CrudApp;
