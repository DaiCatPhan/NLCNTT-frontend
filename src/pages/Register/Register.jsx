import className from "classnames/bind";
import styles from "./Register.module.scss";
import { Fragment, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

import HeaderNone from "../../layouts/components/HeaderNone";
import { registerApi } from "../../services/AuthenticationService";

const cx = className.bind(styles);

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isValidInputs = () => {
    if (!email) {
      toast.error("Nhập thiếu dữ liệu email !!!");
      return false;
    }
    let regEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regEmail.test(email)) {
      toast.error("Email không hợp lệ !!!");
      return false;
    }
    if (!name) {
      toast.error("Nhập thiếu dữ liệu name !!!");
      return false;
    }
    if (!gender) {
      toast.error("Nhập thiếu dữ liệu giới tính !!!");
      return false;
    }
    if (!phone) {
      toast.error("Nhập thiếu dữ liệu phone !!!");
      return false;
    }
    if (!password) {
      toast.error("Nhập thiếu dữ liệu password !!!");
      return false;
    }
    if (!confirmPassword) {
      toast.error("Nhập thiếu dữ liệu confirm password !!!");
      return false;
    }

    if (password != confirmPassword) {
      toast.error("password và confirm password không giống nhau !!!");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let checkIsValidate = isValidInputs();
    if (checkIsValidate === true) {
      const res = await registerApi({ email, name, phone, gender, password });
      if (res && +res.data.EC === 0) {
        toast.success(res.data.EM);
        setTimeout(() => {
          navigate("/authentication/login");
        }, 700);
      } else {
        toast.error(res.data.EM);
      }
    }
  };

  return (
    <div className={cx("wrapper")}>
      <HeaderNone />

      <div className={cx("photograph")}></div>

      <motion.div
      // initial={{ opacity: 0, scale: 0, translateY: 8 }}
      // whileInView={{ opacity: 1, scale: 1, y: 80 }}
      // transition={{ duration: 1 }}
      // viewport={{ once: true }}
      >
        <form onSubmit={(e) => handleSubmit(e)} className={cx("form")}>
          <h1>Thành viên đăng ký </h1>
          {/* Email */}
          <div className={cx("form-group")}>
            <label className={cx("form-label", "text-warning")} htmlFor="email">
              Email: <span> (ex: NguyenVanA12345@gmai.com)</span>
            </label>
            <input
              className={cx(
                "form-control",
                "bg-transparent",
                "py-2",
                "fs-3",
                "text-white",
                "mt-1"
              )}
              type="email"
              placeholder="Email "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* Username */}
          <div className={cx("form-group")}>
            <label className={cx("form-label", "text-warning")}>Username</label>
            <input
              className={cx(
                "form-control",
                "bg-transparent",
                "py-2",
                "fs-3",
                "text-white",
                "mt-1"
              )}
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="my-3">
            <span className="text-warning  ">Giới tính: </span>
            <div className="form-check form-check-inline mx-4">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="nam"
                value="nam"
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label text-white" htmlFor="nam">
                Nam
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="nu"
                value="nữ"
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label text-white" htmlFor="nu">
                Nữ
              </label>
            </div>
          </div>
          {/* SDT */}
          <div className={cx("form-group")}>
            <label className={cx("form-label", "text-warning")}>
              Số điện thoại
            </label>
            <input
              className={cx(
                "form-control",
                "bg-transparent",
                "py-2",
                "fs-3",
                "text-white",
                "mt-1"
              )}
              type="text"
              placeholder="SDT"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          {/* Password */}
          <div className={cx("form-group")}>
            <label
              className={cx("form-label", "text-warning")}
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={cx(
                "form-control",
                "bg-transparent",
                "py-2",
                "fs-3",
                "text-white",
                "mt-1"
              )}
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* Re-Password */}
          <div className={cx("form-group")}>
            <label
              className={cx("form-label", "text-warning ")}
              htmlFor="password"
            >
              Confirm Password
            </label>
            <input
              className={cx(
                "form-control",
                "bg-transparent",
                "py-2",
                "fs-3",
                "text-white",
                "mt-1"
              )}
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={cx("btn_register", {
              "bg-success":
                email && name && phone && password && confirmPassword && gender,
            })}
            disabled={
              email && name && phone && password && confirmPassword && gender
                ? false
                : true
            }
          >
            Register
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Register;
