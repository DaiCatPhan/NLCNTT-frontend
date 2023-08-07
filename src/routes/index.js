import Login from "../pages/Login";
import Register from "../pages/Register";

const publicRoutes = [
  // Authentication
  { path: "/authentication/login", component: Login },
  { path: "/authentication/register", component: Register },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
