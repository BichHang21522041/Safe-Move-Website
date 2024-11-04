import AuthLayout from "./components/AuthLayout";
import Layout from "./components/MainLayout";
import MainRoutes from "./routes";
import { useGlobalContext } from "./utils/globalContext";

const App = () => {
  const { isAuthenticated } = useGlobalContext();
  return isAuthenticated ? (
    <Layout children={<MainRoutes />} />
  ) : (
    <AuthLayout />
  );
};

export default App;
