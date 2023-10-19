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

function ModalRegisterBooking(props) {
  const { isShowModalRegisterBooking, setIsShowModalRegisterBooking } = props;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleClose = () => {
    setEmail("");
    setName("");
    setPhone("");
    setAddress("");
    setIsShowModalRegisterBooking(false);
  };

  const handleSubmitForm = async () => {
    // Swal.fire("Good job!", "You clicked the button!", "success");
    Swal.fire({
      icon: "success",
      title: "<h1>Gửi yêu cầu thành công</h1>",
      html: "<h4>Sẽ liên hệ với quý khách sớm nhất . Xin cảm ơn </h4>",
    });
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
                  className={cx("py-3")}
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
                  className={cx("py-3")}
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
                  className={cx("py-3")}
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
                  className={cx("py-3")}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <div className={cx("text-center w-100")}>
              <button className={cx("btnReg")} onClick={handleSubmitForm}>
                <p>Gửi lại yêu cầu</p>
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default ModalRegisterBooking;
