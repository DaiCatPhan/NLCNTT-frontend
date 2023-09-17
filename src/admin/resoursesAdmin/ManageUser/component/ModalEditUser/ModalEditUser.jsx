import className from "classnames/bind";
import styles from "./ModalEditUser.module.scss";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import UserService from "../../../../../services/UserService";
import axios from "../../../../../services/customize-axios";

const cx = className.bind(styles);

function ModalEditUser(props) {
  const { show, handleClose, dataUserEdit, handleUpdateListUser } = props;
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (show) {
      setId(dataUserEdit.id);
      setName(dataUserEdit.name);
      setPhone(dataUserEdit.phone);
      setGender(dataUserEdit.gender);
      setRole(dataUserEdit.role);
      setEmail(dataUserEdit.email);
    }
  }, [dataUserEdit]);

  const handleEditUser = async () => {
    try {
      const reqUserEdit = { name, phone, gender, role, email, id };
      const response = await UserService.updateUser(reqUserEdit);
      if (response && response.data.EC === 0) {
        handleClose();
        setName("");
        setPhone("");
        setGender("");
        setRole("");
        setEmail("");
        toast.success(response.data.EM);
        handleUpdateListUser();
      } else {
        toast.error(response.data.EM);
      }
    } catch (err) {
      console.log(">> err", err);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <Modal
        show={show}
        onHide={handleClose}
        size="md"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit a User</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className={cx("modalAddUser")}>
            <div className={cx("form")}>
              <form>
                <div className="form-group">
                  <label>User name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input "
                    type="radio"
                    value="nam"
                    id="male"
                    name="gender"
                    checked={gender === "nam"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label className="form-check-label  " htmlFor="male">
                    Nam
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input  "
                    type="radio"
                    id="female"
                    value="nữ"
                    name="gender"
                    checked={gender === "nữ"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label className="form-check-label  " htmlFor="female">
                    Nữ
                  </label>
                </div>

                <div className="form-group ">
                  <label>Chức vụ</label>
                  <select
                    className="form-control w-25"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value={"huongdanvien"}>Hướng dẫn viên</option>
                    <option value={"taixe"}>Tài xế</option>
                    <option value={"phuxe"}>Phụ xe</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    value={email || ""}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditUser}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalEditUser;
