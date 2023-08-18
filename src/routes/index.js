import Login from "../pages/Login";
import Register from "../pages/Register";
import FirstPage from "../pages/FirstPage";
import NoneLayout from "../layouts/NoneLayout";

import Structure from "../resources/AboutUs/Structure";
import BusinessAreas from "../resources/AboutUs/BusinessAreas";
import CoreValues from "../resources/AboutUs/CoreValues";
import History from "../resources/AboutUs/History";
import Philosophy from "../resources/AboutUs/Philosophy";

const publicRoutes = [
  // Về chúng tôi
  { path: "/aboutus/co-cau-to-chuc", component: Structure },
  {
    path: "/aboutus/tam-nhin-su-menh-gia-tri-cot-loi",
    component: BusinessAreas,
  },
  { path: "/aboutus/lich-su-phat-trien", component: CoreValues },
  { path: "/aboutus/triet-ly-kinh-doanh", component: History },
  { path: "/aboutus/linh-vuc-kinh-doanh", component: Philosophy },

  // Dich vụ
  { path: "/service/", component: Login },

  // Sự Kiện
  { path: "/event/", component: Login },

  // Tin tức
  { path: "/news/", component: Login },

  // Trách nhiệm
  { path: "/responsibility/", component: Login },

  // Hệ thống
  { path: "/system/", component: Login },

  // Authentication
  { path: "/authentication/login", component: Login, layout: NoneLayout },
  { path: "/authentication/register", component: Register, layout: NoneLayout },
  // Home
  { path: "/", component: FirstPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
