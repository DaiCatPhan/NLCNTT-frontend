import className from "classnames/bind";
import styles from "./ModalDeleteUser.module.scss";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { deleteUser } from "../../../../../services/UserService";

const cx = className.bind(styles);

function ModalDeleteUser(props) {
  const { show, handleClose, dataDeleteUser, handleUpdateListUser } = props;
  const handleDeleteUser = async () => {
    try {
      const UserDeleted = await deleteUser(dataDeleteUser.id);
      if (UserDeleted && +UserDeleted.status == 204) {
        handleClose();
        handleUpdateListUser();
        toast.success("Xóa tài khoản thành công");
      } else {
        toast.error("Xóa tài khoản thất bại !!!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={cx("wrapper")}>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete a User</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="mx-5">
            <p>
              Hành động không thể hoàn tác ! ,Bạn có chắc chắn xóa tài khoản này
              không ?
            </p>
            <p>{dataDeleteUser && <b>Email: {dataDeleteUser.email} ?</b>}</p>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDeleteUser}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalDeleteUser;
