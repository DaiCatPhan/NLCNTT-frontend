import className from "classnames/bind";
import styles from "./ModalViewTour.module.scss";
const cx = className.bind(styles);

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IconAlarm, IconPlaneDeparture } from "@tabler/icons-react";
import { IconCar } from "@tabler/icons-react";
import { IconShip } from "@tabler/icons-react";

function ModalViewTour(rawData) {
  const {
    dataModalView,
    setDataModalView,
    isShowModalView,
    setIsShowModalView,
  } = rawData;

  const handleClose = () => {
    setIsShowModalView(false);
    setDataModalView("");
  };

  console.log(dataModalView);

  return (
    <div className={cx("wrapper")}>
      <Modal show={isShowModalView} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>
            <div className={cx(" border fs-3")}>
              <b>Tên Tour : {dataModalView?.name}</b>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={cx("wrapper")}>
            <div className={cx("border")}>
              <img
                className={cx("imageTour")}
                src={dataModalView?.image}
                alt="notFound"
              />
              <div className={cx("px-5")}>
                <div className={cx("d-flex justify-content-between py-4 fs-3")}>
                  <div>
                    <IconAlarm /> {dataModalView?.duration}
                  </div>
                  <div>
                    <IconAlarm /> {dataModalView?.domain}, {dataModalView?.type}
                  </div>
                  <div>
                    Phương tiện:{" "}
                    {dataModalView?.vehicle === "xedulich" ? (
                      <IconCar height="30px" width="30px" />
                    ) : dataModalView?.vehicle === "maybay" ? (
                      <IconPlaneDeparture />
                    ) : (
                      <IconShip />
                    )}
                  </div>
                </div>

                <div className={cx("d-flex  justify-content-between g-10 ")}>
                  <div className={cx("border  flex-grow-1 mx-2 fs-3 text-center rounded border-primary")}>
                    Giá Tour người lớn : {dataModalView?.priceAdult}
                  </div>

                  <div className={cx("border  flex-grow-1 mx-2 fs-3 rounded border-primary text-center")}>
                    Giá Tour trẻ em : {dataModalView?.priceChild}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary px-5 fs-4" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalViewTour;
