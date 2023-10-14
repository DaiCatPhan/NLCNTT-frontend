import className from "classnames/bind";
import styles from "./ModalViewProcessTour.module.scss";
const cx = className.bind(styles);

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalViewProcessTour(rawData) {
  const {
    isShowModalViewProcessTour,
    setIsShowModalViewProcessTour,
    dataModalViewProcessTour,
    setDataModalViewProcessTour,
  } = rawData;

  console.log(">>>", dataModalViewProcessTour);

  const handleClose = () => {
    setIsShowModalViewProcessTour(false);
    setDataModalViewProcessTour(" ");
  };

  return (
    <div className={cx("wrapper")}>
      <Modal
        show={isShowModalViewProcessTour}
        onHide={handleClose}
        className={cx("modal")}
        // fullscreen
        size="fullscreen"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className={cx("wrapperBody")}>
          <div className={cx("process")}>
            <img
              className={cx("w-100")}
              src={dataModalViewProcessTour.imageTour}
              alt="notFound"
            />
            <div
              className={cx(
                " p-3 fs-4 d-flex justify-content-between  align-items-center border border-danger"
              )}
            >
              <div className={cx("w-30px")}>
                ID TOUR : {dataModalViewProcessTour.idTour}{" "}
              </div>
              <div className={cx("text-truncate")}>
                {dataModalViewProcessTour.nameTour}
              </div>
              <div className={cx("w-30px")}>  </div>
            </div>
              <div dangerouslySetInnerHTML={{__html: dataModalViewProcessTour.descriptionHTMLProcessTour}}></div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalViewProcessTour;
