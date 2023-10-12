import className from "classnames/bind";
import styles from "./ModalViewTour.module.scss";
const cx = className.bind(styles);

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalViewTour(rawData) {
  const {
    dataModalView,
    setDataModalView,
    isShowModalView,
    setIsShowModalView,
  } = rawData;

  const handleClose = () => {
    setIsShowModalView(false);
    setDataModalView(null);
  };

  return (
    <div className={cx("wrapper")}>
      <Modal show={isShowModalView} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Tour Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={cx("wrapper")}>
            <h1>Modal Tour Detail</h1>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalViewTour;
