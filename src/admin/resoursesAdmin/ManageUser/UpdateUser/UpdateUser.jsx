import className from "classnames/bind";
import styles from "./UpdateUser.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const cx = className.bind(styles);

function UpdateUser() {
  return (
    <div className={cx("wrapper")}>
      <h1>UpdateUser</h1>
    </div>
  );
}

export default UpdateUser;
