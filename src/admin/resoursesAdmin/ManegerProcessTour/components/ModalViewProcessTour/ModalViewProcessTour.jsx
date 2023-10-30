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
          <Modal.Title className={cx(" w-75  text-center")}>
            <h3 className={cx("text-truncate")}>
              <b>{dataModalViewProcessTour.nameProcessTour}</b>
            </h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={cx("wrapperBody")}>
          <div className={cx("process")}>
            <img
              className={cx("w-100", "imgTour")}
              src={dataModalViewProcessTour.imageTour}
              alt="notFound"
            />
            <div
              className={cx(
                " p-3 fs-4 d-flex justify-content-between  align-items-center border"
              )}
            >
              <div className={cx("w-30px ")}>
                ID TOUR : {dataModalViewProcessTour.idTour}
              </div>
              <div className={cx("text-truncate")}>
                {dataModalViewProcessTour.nameTour}
              </div>
              <div className={cx("w-30px")}> </div>
            </div>
            <div
              className={cx("desHTML")}
              dangerouslySetInnerHTML={{
                __html: dataModalViewProcessTour.descriptionHTMLProcessTour,
              }}
            ></div>
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
