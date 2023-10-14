import className from "classnames/bind";
import styles from "./ModalDeleteProcessTour.module.scss";
const cx = className.bind(styles);

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

import ProcessTourService from "../../../../../services/ProcessTourService";
function ModalDeleteProcessTour(rawData) {
  const {
    isShowModalDeleteProcessTour,
    setIsShowModalDeleteProcessTour,
    dataModalDeleteProcessTour,
    setDataModalDeleteProcessTour,
    callAPIgetTours,
  } = rawData;
  const handleClose = () => {
    setIsShowModalDeleteProcessTour(false);
    setDataModalDeleteProcessTour("");
    callAPIgetTours();
  };

  const handleDeleteProcessTour = async () => {
    if (
      dataModalDeleteProcessTour?.idTour &&
      dataModalDeleteProcessTour?.idProcessTour
    ) {
      const res = await ProcessTourService.deleteProcessTourbyId(
        dataModalDeleteProcessTour
      );

      if (res && res.data.EC == 0) {
        toast.success(res.data.EM);
        handleClose();
      } else {
        toast.error(res.data.EM);
      }
    }
  };

  return (
    <div className={cx("wrapper")}>
      <Modal show={isShowModalDeleteProcessTour} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa chương trình Tour </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {dataModalDeleteProcessTour?.idProcessTour ? (
            <>
              <h3>Hành động không thể hoàn tác !!!</h3>
              <h3>
                Bạn có chắc chắn muốn xóa
                <b> {dataModalDeleteProcessTour?.nameProcessTour} </b>
              </h3>
            </>
          ) : (
            <h3>Bạn chưa tạo chương trình Tour !! . Không thể xóa</h3>
          )}
        </Modal.Body>
        <Modal.Footer>
          {dataModalDeleteProcessTour?.idProcessTour && (
            <Button variant="danger" onClick={handleDeleteProcessTour}>
              Delete
            </Button>
          )}

          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalDeleteProcessTour;
