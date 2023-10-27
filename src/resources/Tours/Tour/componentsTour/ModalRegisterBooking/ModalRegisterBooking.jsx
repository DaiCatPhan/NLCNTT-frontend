import className from "classnames/bind";
import styles from "./ModalRegisterBooking.module.scss";
const cx = className.bind(styles);

import Form from "react-bootstrap/Form";
import moment from "moment";

import { Modal } from "antd";

import { toast } from "react-toastify";
import "sweetalert2/src/sweetalert2.scss";

function ModalRegisterBooking(props) {
  const {
    isShowModalRegisterBooking,
    setIsShowModalRegisterBooking,
    handleResTourByModalBooking,
    data,
    profile,
  } = props;

  const handleClose = () => {
    setIsShowModalRegisterBooking(false);
  };

  const handleOk = async () => {
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
          style={{ top: "20px" }}
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

              <div className={cx("py-3")}>
                <div>Email : {profile?.email}</div>
              </div>

              <div className={cx("py-3")}>
                <div>Họ và tên : {profile?.name}</div>
              </div>

              <div className={cx("py-3")}>
                <div>Tên Tour : {data?.nameTour}</div>
              </div>

              <div className={cx("py-3  d-flex justify-content-between")}>
                <div>
                  Ngày khởi hành : {moment(data?.startDay).format("DD-MM-YYYY")}
                </div>
                <div>
                  Ngày kết thúc : {moment(data?.endDay).format("DD-MM-YYYY")}
                </div>
              </div>

              <div
                className={cx(
                  "d-flex my-2 justify-content-between border py-3 rounded"
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
        </Modal>
      </div>
    </div>
  );
}

export default ModalRegisterBooking;
