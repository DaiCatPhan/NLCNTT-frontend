import className from "classnames/bind";
import styles from "./ModalDeleteBookingTour.module.scss";
const cx = className.bind(styles);
import { Button, Modal } from "antd";
import { useState } from "react";
import { toast } from "react-toastify";

import BookingTourService from "../../../../../services/BookingTourService";

function ModalDeleteBookingTour(props) {
  const {
    isShowModalDeleteBooking,
    setIsShowModalDeleteBooking,
    dataDelete,
    setDataDelete,
    fetchDataOrder,
  } = props;

  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleOk = async () => {
    setConfirmLoading(true);

    // Goi API
    const res = await BookingTourService.deleteBookingTour({
      idBookingTour: dataDelete?.id,
      idCustomer: dataDelete?.idCustomer,
    });

    if (res && res.data.EC === 0) {
      toast.success("Hủy đặt lịch Tour thành công ");
      setConfirmLoading(false);
      handleCancel();
    }
  };
  const handleCancel = () => {
    setIsShowModalDeleteBooking(false);
    setDataDelete("");
    fetchDataOrder();
  };

  return (
    <div className={cx("wrapper")}>
      <Modal
        title="Hủy lịch trình"
        open={isShowModalDeleteBooking}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className={cx("text-uppercase")}>
          <p>
            Bạn có chắc chắn muốn hủy lịch trình :
            <b> {dataDelete?.Calendar?.Tour?.name}</b>
          </p>
          <p className={cx('text-primary')}>Chúng tôi sẽ rất tiếc vì điều đó !!!</p>
        </div>
      </Modal>
    </div>
  );
}

export default ModalDeleteBookingTour;
