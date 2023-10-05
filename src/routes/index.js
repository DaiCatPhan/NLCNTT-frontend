import Login from "../pages/Login";
import Register from "../pages/Register";
import FirstPage from "../pages/FirstPage";
import NotFoundPage from "../admin/component/NotFoundPage";

// ADMIN =======================
import HomeAdmin from "../admin/resoursesAdmin/HomeAdmin";

import Dashboard from "../admin/resoursesAdmin/Dashboard";

import ListUser from "../admin/resoursesAdmin/ManageUser/ListUser";

import ListTour from "../admin/resoursesAdmin/ManageTour/ListTour";
import UpdateTour from "../admin/resoursesAdmin/ManageTour/UpdateTour";
import CreateTour from "../admin/resoursesAdmin/ManageTour/CreateTour";

// tour
import StaffDetail from "../admin/resoursesAdmin/ManageUser/StaffDetail";

// Layout
import NoneLayout from "../layouts/NoneLayout";
import AdminLayout from "../layouts/AdminLayout";

import Structure from "../resources/AboutUs/Structure";
import BusinessAreas from "../resources/AboutUs/BusinessAreas";
import CoreValues from "../resources/AboutUs/CoreValues";
import History from "../resources/AboutUs/History";
import Philosophy from "../resources/AboutUs/Philosophy";
import Contact from "../resources/Contact";

// Tour
import ListTourDomestic from "../resources/Tours/ListTourDomestic";
import ListTourForeign from "../resources/Tours/ListTourForeign";
import Tour from "../resources/Tours/Tour";

const publicRoutes = [
  //===================== ADMIN ========================
  { path: "/homeadmin", component: HomeAdmin, layout: AdminLayout },
  { path: "/dashboard", component: Dashboard, layout: AdminLayout },

  { path: "/user-listUser/:id", component: StaffDetail, layout: AdminLayout },
  { path: "/user-listUser", component: ListUser, layout: AdminLayout },

  { path: "/tour-listTour", component: ListTour, layout: AdminLayout },
  { path: "/tour-createTour", component: CreateTour, layout: AdminLayout },
  { path: "/tour-updateTour/:id", component: UpdateTour, layout: AdminLayout },

  //================== END ADMIN ================================

  // AllTypeTour

  { path: "/tours/Domestic", component: ListTourDomestic },
  { path: "/tours/Foreign", component: ListTourForeign },

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
  //
  { path: "/:slug", component: NotFoundPage, layout: NoneLayout },
];

export { publicRoutes };
