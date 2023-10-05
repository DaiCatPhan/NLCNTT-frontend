import className from "classnames/bind";
import styles from "./CreateTour.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const cx = className.bind(styles);

function CreateTour() {
  return <div className={cx("wrapper")}></div>;
}

export default CreateTour;
