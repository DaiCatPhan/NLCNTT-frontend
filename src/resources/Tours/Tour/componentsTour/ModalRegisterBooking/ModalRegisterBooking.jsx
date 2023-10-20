import className from "classnames/bind";
import styles from "./ModalRegisterBooking.module.scss";
import { useEffect, useState, useMemo } from "react";
const cx = className.bind(styles);

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { IconAsterisk } from "@tabler/icons-react";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { toast } from "react-toastify";

import useAuth from "../../../../../hook/useAuth";

function ModalRegisterBooking(props) {
  const { isLogged, role, profile } = useAuth();

  const {
    getModalResgisterBooking,
    isShowModalRegisterBooking,
    setIsShowModalRegisterBooking,
  } = props;
  const [email, setEmail] = useState(profile?.email || "");
  const [name, setName] = useState(profile?.name || "");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleClose = () => {
    setPhone("");
    setAddress("");
    setIsShowModalRegisterBooking(false);
  };

  const validate = () => {
    if (!email) {
      toast.warning("Hãy nhập email !!!");
      return false;
    }
    if (!name) {
      toast.warning("Hãy nhập name !!!");
      return false;
    }
    if (!phone) {
      toast.warning("Hãy nhập phone !!!");
      return false;
    }
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      toast.warning(" Vui lòng nhập đúng định dạng số điện thoại  !!!");
      return false;
    }
    if (!address) {
      toast.warning("Hãy nhập address !!!");
      return false;
    }
    return true;
  };

  const handleSubmitForm = async () => {
    const checkVad = validate();
    if (!checkVad) {
      return;
    }
    getModalResgisterBooking({ email, name, phone, address });
    handleClose();
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        <Modal show={isShowModalRegisterBooking} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body className={cx("modalBody")}>
            <div className={cx("mb-4")}>
              <h1>
                <b>Yêu cầu đặt</b>
              </h1>
              <p className={cx("text-secondary")}>
                Quý khách vui lòng nhập thông tin liên hệ bên dưới
              </p>
            </div>
            <Form>
              {/* Email */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
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
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  Họ và tên <IconAsterisk height={10} width={10} color="red" />{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  className={cx("py-3 fs-4")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              {/* So dien thoai */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  Điện thoại <IconAsterisk height={10} width={10} color="red" />
                </Form.Label>
                <Form.Control
                  type="text"
                  className={cx("py-3 fs-4")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>

              {/* Dia chi */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control
                  type="text"
                  className={cx("py-3 fs-4")}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <div className={cx("text-center w-100")}>
              <button className={cx("btnReg")} onClick={handleSubmitForm}>
                <p>Gửi yêu cầu</p>
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default ModalRegisterBooking;
