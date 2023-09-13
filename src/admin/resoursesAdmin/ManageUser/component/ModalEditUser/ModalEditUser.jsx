import className from "classnames/bind";
import styles from "./ModalEditUser.module.scss";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { updateUser } from "../../../../../services/UserService";
import axios from "../../../../../services/customize-axios";

const cx = className.bind(styles);

function ModalEditUser(props) {
  const { show, handleClose, dataUserEdit, handleUpdateListUser } = props;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEditUser = async () => {
    try {
      const EditUser = await updateUser([
        dataUserEdit.id,
        {
          name,
          phone,
          gender,
          role,
          email,
          password,
        },
      ]);

      if (EditUser.data.code == 2) {
        handleClose();
        setName("");
        setPhone("");
        setGender("");
        setRole("");
        setEmail("");
        setPassword("");

        handleUpdateListUser();
        toast.success("Update tài khoản thành công");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // khi modal mo ra thi mới xử lí
    if (show) {
      setName(dataUserEdit.name);
      setPhone(dataUserEdit.phone);
      setGender(dataUserEdit.gender);
      setRole(dataUserEdit.role);
      setEmail(dataUserEdit.email);
      setPassword(dataUserEdit.password);
    }
  }, [dataUserEdit]);

  return (
    <div className={cx("wrapper")}>
      <Modal show={show} onHide={handleClose}>
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
                    value={name || ""}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    value={phone || ""}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input "
                    type="radio"
                    value="nam"
                    id="male"
                    name="gander"
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
                    name="gander"
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
                    value={role || ""}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option>Choose...</option>
                    <option value={"Hướng dẫn viên"}>Hướng dẫn viên</option>
                    <option value={"Tài xế"}>Tài xế</option>
                    <option value={"Phụ xe"}>Phụ xe</option>
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
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={password || ""}
                    onChange={(e) => setPassword(e.target.value)}
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
