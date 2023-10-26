import className from "classnames/bind";
import { useState } from "react";
import styles from "./ModalRegisterBooking.module.scss";
const cx = className.bind(styles);

// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { Modal } from "antd";

import { IconAsterisk } from "@tabler/icons-react";
import { toast } from "react-toastify";
import "sweetalert2/src/sweetalert2.scss";

import useAuth from "../../../../../hook/useAuth";

function ModalRegisterBooking(props) {
  const { isLogged, role, profile } = useAuth();

  const {
    isShowModalRegisterBooking,
    setIsShowModalRegisterBooking,
    handleResTourByModalBooking,
    data,
  } = props;

  const [email, setEmail] = useState(profile?.email || "");
  const [name, setName] = useState(profile?.name || "");

  const handleClose = () => {
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

    return true;
  };

  const handleOk = async () => {
    const checkVad = validate();
    if (!checkVad) {
      return;
    }
    handleResTourByModalBooking();
    handleClose();
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("bodyWrapper")}>
        <Modal
          open={isShowModalRegisterBooking}
          onCancel={handleClose}
          okText="Xác nhận"
          cancelText="Hủy"
          style={{ top: "50px" }}
          onOk={handleOk}
        >
          <div>
            <div className={cx("mb-4")}>
              <h2>
                <b>Yêu cầu đặt</b>
              </h2>
              <p className={cx("text-secondary")}>
                Quý khách vui lòng nhập thông tin liên hệ bên dưới
              </p>
            </div>
            <Form className={cx("fse-20px")}>
              {/* Email */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  className={cx("py-3", "fse-20px")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              {/* Ho va ten */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Họ và tên</Form.Label>
                <Form.Control
                  type="text"
                  className={cx("py-3 ", "fse-20px")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <div className={cx("py-3")}>
                <div>Tên Tour : {data?.nameTour}</div>
              </div>

              <div
                className={cx(
                  "d-flex justify-content-between border py-3 rounded"
                )}
              >
                <div className={cx("px-2")}>
                  Số vé người lớn : {data?.numberTicketAdult}
                </div>
                <div className={cx("px-2")}>
                  Số vé trẻ em : {data?.numberTicketChild}
                </div>
              </div>

              <div
                className={cx(
                  "d-flex justify-content-between border py-3 my-4 rounded"
                )}
              >
                <div className={cx("px-2")}>
                  Tổng tiền thanh toán :{" "}
                  {data?.countMoney.toLocaleString("vi-VN")} VND
                </div>
              </div>
            </Form>
          </div>

          {/* <div className={cx("text-center w-100")}>
            <button className={cx("btnReg")} onClick={handleSubmitForm}>
              <p>Gửi yêu cầu</p>
            </button>
          </div> */}
        </Modal>
      </div>
    </div>
  );
}

export default ModalRegisterBooking;
