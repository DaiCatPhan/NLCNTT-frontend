import className from "classnames/bind";
import styles from "./NavBarAdmin.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const cx = className.bind(styles);
import React from "react";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import {
  IconHome2,
  IconLayoutDashboard,
  IconSettings,
  IconTournament,
  IconUser,
} from "@tabler/icons-react";
const { Header, Content, Footer, Sider } = Layout;
const items2 = [
  {
    icon: <IconHome2 />,
    label: <Link to={"/homeadmin"}>Home</Link>,
  },
  {
    icon: <IconLayoutDashboard />,
    label: <Link to={"/dashboard"}>Dash board</Link>,
  },
  {
    icon: <IconUser />,
    label: <Link to={"/user-listUser"}>Manager Staff</Link>,
  },
  {
    icon: <IconTournament />,
    label: <Link to={"/tour-listTour"}>Manager Tour</Link>,

    // children: [
    //   {
    //     label: <Link to={""}>List User</Link>,
    //   },
    //   {
    //     label: <Link to={""}>List User</Link>,
    //   },
    //   {
    //     label: <Link to={""}>List User</Link>,
    //   },
    // ],
  },
  {
    icon: <IconSettings />,
    label: <Link to={""}>Setting</Link>,
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
