import Login from "../pages/Login";
import Register from "../pages/Register";
import NoneLayout from "../layouts/NoneLayout";

const publicRoutes = [
  // Authentication
  { path: "/authentication/login", component: Login , layout : NoneLayout },
  { path: "/authentication/register", component: Register , layout : NoneLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
