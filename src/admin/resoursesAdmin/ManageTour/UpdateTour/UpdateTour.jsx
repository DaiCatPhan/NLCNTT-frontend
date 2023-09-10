import className from "classnames/bind";
import styles from "./UpdateTour.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const cx = className.bind(styles);

function UpdateTour() {
  return (
    <div className={cx("wrapper")}>
      <h1>UpdateTour</h1>
    </div>
  );
}

export default UpdateTour;
