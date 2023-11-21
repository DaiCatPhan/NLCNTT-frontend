import className from "classnames/bind";
import styles from "./NavBarAdmin.module.scss";
const cx = className.bind(styles);
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import React from "react";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import {
  IconAlignBoxCenterStretch,
  IconHome2,
  IconLayoutDashboard,
  IconSettings,
  IconShoppingCart,
  IconTournament,
  IconUser,
} from "@tabler/icons-react";
import { IconCalendarCheck } from "@tabler/icons-react";
import { IconChartBar } from "@tabler/icons-react";
const { Header, Content, Footer, Sider } = Layout;
const items2 = [
  {
    icon: <IconHome2 />,
    label: <Link to={"/homeadmin"}>Home</Link>,
    key: "1",
  },
  {
    icon: <IconLayoutDashboard />,
    label: <Link to={"/dashboard"}>Dash board</Link>,
    key: "2",
  },
  {
    icon: <IconUser />,
    label: <Link to={"/user-listCustomer"}>Manager Customer</Link>,
    key: "13",
  },
  {
    icon: <IconUser />,
    label: <Link to={"/user-listUser"}>Manager Staff</Link>,
    key: "3",
  },
  {
    icon: <IconTournament />,
    label: <Link>Manager Tour</Link>,
    key: "4",

    children: [
      {
        label: <Link to={"/tour-listTour"}>List Tour</Link>,
        key: "4-1",
      },

      {
        label: <Link to={"/tour-createTour"}>Create Tour</Link>,
        key: "4-2",
      },
    ],
  },
  {
    icon: <IconCalendarCheck />,
    label: <Link to={""}>Manager Calendar</Link>,
    key: "5",

    children: [
      {
        label: <Link to={"/calendar-createCalendarTour"}>Create Calendar</Link>,
        key: "5-1",
      },
    ],
  },
  {
    icon: <IconAlignBoxCenterStretch />,
    label: <Link to={""}>Manager Process Tour</Link>,
    key: "6",

    children: [
      {
        label: <Link to={"/process-listProcessTour"}>List ProcessTour</Link>,
        key: "6-1",
      },
    ],
  },
  {
    icon: <IconShoppingCart />,
    label: <Link>Manager Booking Tour</Link>,
    key: "7",

    children: [
      {
        label: <Link to={"/booking-listBookingTour"}>CRUD</Link>,
        key: "7-1",
      },
    ],
  },
  {
    icon: <IconChartBar />,
    label: <Link>Manager Statistics</Link>,
    key: "8",

    children: [
      {
        label: <Link to={"/statistical-listStatistical"}>Revenue</Link>,
        key: "8-1",
      },
      {
        label: <Link to={"/statistical-chart"}>Chart Months</Link>,
        key: "8-2",
      },
    ],
  },
  {
    icon: <IconSettings />,
    label: <Link>Setting</Link>,
    key: "9",
  },
];
function NavBarAdmin3() {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className={cx("wrapper")}>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            background: colorBgContainer,
          }}
          width={300}
          className={cx("sider")}
        >
          <Menu
            className={cx("menu")}
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
            }}
            items={items2}
          />
        </Sider>
      </Layout>
    </div>
  );
}

export default NavBarAdmin3;
