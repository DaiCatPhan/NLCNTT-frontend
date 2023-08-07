import "./DefaultLayout.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

import className from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

const cx = className.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
