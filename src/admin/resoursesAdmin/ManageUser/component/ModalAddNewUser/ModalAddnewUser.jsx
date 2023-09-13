import className from "classnames/bind";
import styles from "./ModalAddNewUser.module.scss";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

import { postCreareUser } from "../../../../../services/UserService";

const cx = className.bind(styles);

function ModalAddNewUser(props) {
  const { show, handleClose, handleUpdateListUser } = props;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errCreate, setErrCreate] = useState("");

  const handleSave = async () => {
    try {
      const res = await postCreareUser({
        name,
        phone,
        gender,
        role,
        email,
        password,
      });
      console.log(res);
      if (res && res.data.code == 201) {
        handleClose();
        setName("");
        setPhone("");
        setGender("");
        setRole("");
        setEmail("");
        setPassword("");
        setErrCreate("");

        toast.success("Tạo tài khoản thành công");
        handleUpdateListUser();
      } else {
        // Error
        console.log("loi", res);
        setErrCreate(res.data.mes);
      }
    } catch (err) {
      console.log(err);
      setErrCreate(err.response.data.mes);
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
          <Modal.Title>Create User</Modal.Title>
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
                    name="gander"
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </form>
              {errCreate && <div className="text-center red">{errCreate} </div>}
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalAddNewUser;
