import className from "classnames/bind";
import styles from "./CreateUser.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
const cx = className.bind(styles);
import { useNavigate } from "react-router-dom";

import Notification from "../../../../components/Notification";

function CreateUser() {
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
      <h1>CreateUser</h1>
      {contextHolder}
      <button onClick={handleAddUser}>Add nguoi dung</button>
      <Notification />
    </div>
  );
}

export default CreateUser;
