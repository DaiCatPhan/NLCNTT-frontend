import className from "classnames/bind";
import styles from "./ListTour.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const cx = className.bind(styles);

function ListTour() {
  return (
    <div className={cx("wrapper")}>
      <h1>ListTour</h1>
    </div>
  );
}

export default ListTour;
