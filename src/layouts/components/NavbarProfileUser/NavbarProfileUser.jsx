import className from "classnames/bind";
import styles from "./NavbarProfileUser.module.scss";
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
import { IconCalendarCheck } from "@tabler/icons-react";
const { Header, Content, Footer, Sider } = Layout;
const items2 = [
  {
    icon: <IconHome2 />,
    label: <Link to={"/homeadmin"}>Home</Link>,
    key: "1",
  },
  {
    icon: <IconLayoutDashboard />,
    label: <Link to={"/dashboard"}>Đơn hàng của tôi</Link>,
    key: "2",
  },
  {
    icon: <IconUser />,
    label: <Link to={"/user-listUser"}>Hồ sơ của tôi</Link>,
    key: "3",
  },
  {
    icon: <IconTournament />,
    label: <Link>Voucher của tôi</Link>,
    key: "4",
  },
];
function NavBarProfileUser() {
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

export default NavBarProfileUser;
