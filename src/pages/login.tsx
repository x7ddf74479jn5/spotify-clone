import type { CustomNextPage } from "next";
import { Login } from "src/components/page/Login";

const LoginPage: CustomNextPage = () => {
  return <Login />;
};

// LoginPage.getLayout = Layout;

export default LoginPage;
