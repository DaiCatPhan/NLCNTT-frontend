import className from "classnames/bind";
import styles from "./ModalLoginBooking.module.scss";
import { useEffect, useState, useMemo } from "react";
const cx = className.bind(styles);

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { IconAsterisk } from "@tabler/icons-react";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function ModalLoginBooking(props) {
  const {
    isShowModalLoginBooking,
    setIsShowModalLoginBooking,
    handleLoginByModalLoginBooking,
  } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setIsShowModalLoginBooking(false);
  };

  const validate = () => {
    if (!email) {
      toast.warning("Hãy nhập email !!!");
      return false;
    }
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailRegex.test(email)) {
      toast.warning("Email chưa hợp lệ !!!");
      return false;
    }
    if (!password) {
      toast.warning("Hãy nhập password !!!");
      return false;
    }

    return true;
  };

  const handleSubmitForm = async () => {
    const checkVad = validate();
    if (!checkVad) {
      return;
    }

    handleLoginByModalLoginBooking(email, password);

    // goi API kiểm tra đăng nhập

    handleClose();
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        <Modal show={isShowModalLoginBooking} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body className={cx("modalBody")}>
            <div className={cx("mb-4")}>
              <h1>
                <b>Đăng nhập</b>
              </h1>
              <p className={cx("text-secondary")}>
                Quý khách vui lòng nhập đăng nhập để đặt Tour
              </p>
            </div>
            <Form>
              {/* Email */}
              <Form.Group
                className="mb-3"
              >
                <Form.Label>
                  Email <IconAsterisk height={10} width={10} color="red" />
                </Form.Label>
                <Form.Control
                  type="text"
                  className={cx("py-3 fs-4")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              {/* Ho va ten */}
              <Form.Group
                className="mb-3"
              >
                <Form.Label>
                  Password <IconAsterisk height={10} width={10} color="red" />{" "}
                </Form.Label>
                <Form.Control
                  type="password"
                  className={cx("py-3 fs-4")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <div className={cx("text-center w-100")}>
              <button className={cx("btnReg")} onClick={handleSubmitForm}>
                <p>Đăng nhập</p>
              </button>
              <div className={cx("my-2")}>
                <div>
                  Chưa đăng ký ?{" "}
                  <Link to={"/authentication/register"}>Đăng ký </Link>{" "}
                </div>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default ModalLoginBooking;
