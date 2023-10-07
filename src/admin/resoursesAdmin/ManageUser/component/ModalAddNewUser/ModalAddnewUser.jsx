import className from "classnames/bind";
import styles from "./ModalAddNewUser.module.scss";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import UserService from "../../../../../services/UserService";

const cx = className.bind(styles);

function ModalAddNewUser(props) {
  

  const { show, handleClose, handleUpdateListUser } = props;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validateFormUpdateUser = () => {
    if (!email) {
      toast.error("Thiếu dữ liệu trường email");
      return false;
    }
    let regEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regEmail.test(email)) {
      toast.error("Email không hợp lệ !!!");
      return false;
    }
    if (!name) {
      toast.error("Thiếu dữ liệu trường name");
      return false;
    }
    if (!phone) {
      toast.error("Thiếu dữ liệu trường phone");
      return false;
    }
    if (!gender) {
      toast.error("Thiếu dữ liệu trường gender");
      return false;
    }
    if (!role) {
      toast.error("Thiếu dữ liệu trường role");
      return false;
    }
    if (!password) {
      toast.error("Thiếu dữ liệu trường password");
      return false;
    }

    if (password.length < 5) {
      toast.error("Password phải có ít nhất 5 ký tự !!!");
      return false;
    }

    return true;
  };

  const handleUpdateUser = async () => {
    // validate
    let validate = validateFormUpdateUser();
    if (!validate) {
      return;
    }
    // tao bien
    let dataNewUser = { name, phone, gender, role, email, password };
    try {
      let response = await UserService.createUser(dataNewUser);

      if (response && response.data.EC === 0) {
        toast.success(response.data.EM);
        handleClose();

        setName("");
        setPhone("");
        setGender("");
        setRole("");
        setEmail("");
        setPassword("");

        handleUpdateListUser(); // reset databasse
      } else {
        toast.error(response.data.EM);
      }
    } catch (err) {
      console.log(">>> err", err);
    }
  };
  return (
    <div className={cx("wrapper")}>
      {console.log(">>> ModalAddNew")}
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
                {/* Email */}
                <div className="form-group input-group-lg">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    id="exampleInputEmail1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* username */}
                <div className="form-group input-group-lg ">
                  <label>User name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {/* Phone */}
                <div className="form-group input-group-lg">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                {/* Gender */}
                <div>
                  <div className="form-check form-check-inline ">
                    <input
                      className="form-check-input "
                      type="radio"
                      value="male"
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
                      value="female"
                      name="gander"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label  " htmlFor="female">
                      Nữ
                    </label>
                  </div>
                </div>
                {/* Chuc vu */}
                <div className="form-group input-group-lg">
                  <label>Chức vụ</label>
                  <select
                    className="form-control w-25"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option>Choose...</option>
                    <option value={"huongdanvien"}>Hướng dẫn viên</option>
                    <option value={"taixe"}>Tài xế</option>
                    <option value={"phuxe"}>Phụ xe</option>
                  </select>
                </div>

                {/* Password */}
                <div className="form-group input-group-lg">
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
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalAddNewUser;
