import React from "react";
import { Button, notification, Space } from "antd";
import { useNavigate } from "react-router-dom";

import className from "classnames/bind";
import styles from "./Notification.module.scss";
const cx = className.bind(styles);

function Notification() {
  const navigator = useNavigate();

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    });
  };
  const handleAddUser = () => {
    openNotificationWithIcon("error");
    setTimeout(() => {
      navigator("/homeadmin");
    }, 1000);
  };
  return (
    <div className={cx("wrapper")}>
      {contextHolder}
      <button onClick={handleAddUser}>Add nguoi dung</button>
    </div>
  );
}

export default Notification;
