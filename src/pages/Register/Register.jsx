import className from "classnames/bind";
import styles from "./Register.module.scss";
import Header from "../../layouts/components/Header";

const cx = className.bind(styles);

function Register() {
  return (
    <div className={cx("wrapper")}>
      <Header />
    </div>
  );
}

export default Register;
