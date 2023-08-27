import Login from "../pages/Login";
import Register from "../pages/Register";
import FirstPage from "../pages/FirstPage";
import NoneLayout from "../layouts/NoneLayout";

import Structure from "../resources/AboutUs/Structure";
import BusinessAreas from "../resources/AboutUs/BusinessAreas";
import CoreValues from "../resources/AboutUs/CoreValues";
import History from "../resources/AboutUs/History";
import Philosophy from "../resources/AboutUs/Philosophy";
import Contact from "../resources/Contact";

// Tour
import ListTour from "../resources/Tours/ListTour";
import Tour from "../resources/Tours/Tour";

const publicRoutes = [
  

  // Tours

  { path: "/tours", component: ListTour },
  { path: "/tours/:id", component: Tour },


  // Về chúng tôi
  { path: "/aboutus/co-cau-to-chuc", component: Structure },
  {
    path: "/aboutus/tam-nhin-su-menh-gia-tri-cot-loi",
    component: CoreValues,
  },
  { path: "/aboutus/lich-su-phat-trien", component: History },
  { path: "/aboutus/triet-ly-kinh-doanh", component: Philosophy },
  { path: "/aboutus/linh-vuc-kinh-doanh", component: BusinessAreas },


  // Liên hệ
  { path: "/lien-he", component: Contact },

  // Authentication
  { path: "/authentication/login", component: Login, layout: NoneLayout },
  { path: "/authentication/register", component: Register, layout: NoneLayout },
  // Home
  { path: "/", component: FirstPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
