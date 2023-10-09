import className from "classnames/bind";
import styles from "./ViewTour.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const cx = className.bind(styles);

function ViewTour() {
  return (
    <div className={cx("wrapper")}>
      <h1>ViewTour</h1>
    </div>
  );
}

export default ViewTour;
