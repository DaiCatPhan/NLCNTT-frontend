import className from "classnames/bind";
import styles from "./ModalUpdateBooking.module.scss";
const cx = className.bind(styles);
import moment from "moment";

import { Modal } from "antd";
import { useState } from "react";
import { Select, Space } from "antd";
import { toast } from "react-toastify";

import BookingTourService from "../../../../services/BookingTourService";

function ModalUpdateBooking(drops) {
  const {
    isShowModalUpdateBooking,
    setIsShowModalUpdateBooking,
    itemUpdateBooking,
    fetchData,
  } = drops;

  const [status, setStatus] = useState("");
  const [confirmLoading, setConfirmLoading] = useState(false);

  const validate = () => {
    if (!status || !itemUpdateBooking.id) {
      toast.error("Nhập thiếu dữ liệu !!!");
      return false;
    }
    return true;
  };

  const handleOk = async () => {
    const valid = validate();
    if (!valid) {
      return;
    }
    setConfirmLoading(true);
    const res = await BookingTourService.update({
      idBookingTour: itemUpdateBooking?.id,
      status: status,
    });
    setConfirmLoading(false);

    if (res && res.data.EC === 0) {
      toast.success(res.data.EM);
      handleCancel();
      fetchData();
    } else {
      toast.success(res.data.EM);
    }
  };
  const handleCancel = () => {
    setStatus("");
    setIsShowModalUpdateBooking(false);
  };

  const handleChangeSelect = (value) => {
    setStatus(value);
  };

  const handleSelect = (number) => {
    if (number == 0) {
      return "Chưa duyệt";
    } else if (number == 1) {
      return "Đã duyệt";
    } else {
      return "Đơn bị hủy";
    }
  };
  return (
    <div>
      <Modal
        title="Cập nhật trạng thái đơn hàng"
        open={isShowModalUpdateBooking}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div>
          <div>ID Đơn hàng: {itemUpdateBooking.id}</div>
          <div className={cx("my-4")}></div>
          <div>Email: {itemUpdateBooking?.Customer?.email}</div>
          <div className={cx("my-4")}></div>

          <div>Tên Tour : {itemUpdateBooking?.Calendar?.Tour?.name}</div>
          <div className={cx("my-4")}></div>
          <div className={cx("row")}>
            <div className={cx("col-lg")}>
              Ngày bắt đầu :{" "}
              {moment(itemUpdateBooking?.Calendar?.startDay).format(
                "DD-MM-YYYY"
              )}
            </div>
            <div className={cx("col-lg")}>
              Ngày kết thúc :{" "}
              {moment(itemUpdateBooking?.Calendar?.endDay).format("DD-MM-YYYY")}
            </div>
          </div>
          <div className={cx("my-4")}></div>

          <div className={cx("row")}>
            <div className={cx("col-lg")}>Cập nhật trạng thái : </div>
            <div className={cx("col-lg")}>
              <Select
                value={handleSelect(itemUpdateBooking?.status)}
                style={{
                  width: 120,
                }}
                onChange={handleChangeSelect}
                options={[
                  {
                    label: "Chưa duyệt",
                    value: "0",
                  },
                  {
                    label: "Đã duyệt",
                    value: "1",
                  },
                  {
                    label: "Đơn bị hủy",
                    value: "2",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalUpdateBooking;
