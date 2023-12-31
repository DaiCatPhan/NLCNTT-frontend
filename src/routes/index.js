import Login from "../pages/Login";
import Register from "../pages/Register";
import FirstPage from "../pages/FirstPage";
import NotFoundPage from "../admin/component/NotFoundPage";

// Layout
import NoneLayout from "../layouts/NoneLayout";
import AdminLayout from "../layouts/AdminLayout";
import ProfileUserLayout from "../layouts/ProfileUserLayout";

// +++++++++++++++++++++++++++++++++++++++++++++++++++ ADMIN +++++++++++++++++++++++++++++++++++++++++
import HomeAdmin from "../admin/resoursesAdmin/HomeAdmin";
import Dashboard from "../admin/resoursesAdmin/Dashboard";

// Module USER
import ListUser from "../admin/resoursesAdmin/ManageUser/ListUser";
import ListCustomer from "../admin/resoursesAdmin/ManageUser/ListCustomer";

// Module CALENDAR
import CreateCalendar from "../admin/resoursesAdmin/ManagerCalendar/CreateCalendar";

// Module TOUR
import ListTour from "../admin/resoursesAdmin/ManageTour/ListTour";
import UpdateTour from "../admin/resoursesAdmin/ManageTour/UpdateTour";
import CreateTour from "../admin/resoursesAdmin/ManageTour/CreateTour";

// Module PROCESSTOUR
import CreateProcessTour from "../admin/resoursesAdmin/ManegerProcessTour/CreateProcessTour";
import ListProcessTour from "../admin/resoursesAdmin/ManegerProcessTour/ListProcessTour";
import UpdateProcessTour from "../admin/resoursesAdmin/ManegerProcessTour/UpdateProcessTour";

// Module STAFF
import StaffDetail from "../admin/resoursesAdmin/ManageUser/StaffDetail";

// Module BOOKING_TOUR
import ListBookingTour from "../admin/resoursesAdmin/ManagerBookingTour/ListBookingTour";

// Module STATICTICAL_TOUR
import StaticsticalTour from "../admin/resoursesAdmin/ManagerStatistical/StaticsticalTour";
import ChartStatistical from "../admin/resoursesAdmin/ManagerStatistical/ChartStatistical";

//+++++++++++++++++++++++++++++++++++++++++++++++++++++ USER +++++++++++++++++++++++++++++++++++++++++++++

import Structure from "../resources/AboutUs/Structure";
import BusinessAreas from "../resources/AboutUs/BusinessAreas";
import CoreValues from "../resources/AboutUs/CoreValues";
import History from "../resources/AboutUs/History";
import Philosophy from "../resources/AboutUs/Philosophy";
import Contact from "../resources/Contact";

// Tour
import ListTourDomestic from "../resources/Tours/ListTourDomestic";
import TourMienBac from "../resources/Tours/ListTourDomestic/MienBac";
import TourMienTrung from "../resources/Tours/ListTourDomestic/MienTrung";
import TourMienNam from "../resources/Tours/ListTourDomestic/MienNam";
import ListTourForeign from "../resources/Tours/ListTourForeign";
import Tour from "../resources/Tours/Tour";

// Profile User
import Order from "../resources/ProfileUser/Order";
import InfoUser from "../resources/ProfileUser/InfoUser";

// TEST UI
import TestUi from "../testUI";

const publicRoutes = [
  //===================== ADMIN ========================
  { path: "/homeadmin", component: HomeAdmin, layout: AdminLayout },
  { path: "/dashboard", component: Dashboard, layout: AdminLayout },

  // STAFF

  { path: "/user-listUser/:id", component: StaffDetail, layout: AdminLayout },
  { path: "/user-listUser", component: ListUser, layout: AdminLayout },
  { path: "/user-listCustomer", component: ListCustomer, layout: AdminLayout },

  // TOUR
  { path: "/tour-listTour", component: ListTour, layout: AdminLayout },
  { path: "/tour-createTour", component: CreateTour, layout: AdminLayout },
  { path: "/tour-updateTour", component: UpdateTour, layout: AdminLayout },

  // PROCESSTOUR

  {
    path: "/process-createProcessTour",
    component: CreateProcessTour,
    layout: AdminLayout,
  },
  {
    path: "/process-listProcessTour",
    component: ListProcessTour,
    layout: AdminLayout,
  },
  {
    path: "/process-updateProcessTour",
    component: UpdateProcessTour,
    layout: AdminLayout,
  },

  // CALENDAR

  {
    path: "/calendar-createCalendarTour",
    component: CreateCalendar,
    layout: AdminLayout,
  },

  // BOOKING_TOUR
  {
    path: "/booking-listBookingTour",
    component: ListBookingTour,
    layout: AdminLayout,
  },
  // STATISTICAL
  {
    path: "/statistical-listStatistical",
    component: StaticsticalTour,
    layout: AdminLayout,
  },
  {
    path: "/statistical-chart",
    component: ChartStatistical,
    layout: AdminLayout,
  },

  //================== END ADMIN ================================

  // Profile User
  { path: "/profile/infoUser", component: InfoUser },
  { path: "/profile/orderUser", component: Order },

  // TEST UI
  { path: "/testUI", component: TestUi, layout: NoneLayout },

  // AllTypeTour

  { path: "/tours/Domestic/MienBac", component: TourMienBac },
  { path: "/tours/Domestic/MienTrung", component: TourMienTrung },
  { path: "/tours/Domestic/MienNam", component: TourMienNam },
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
