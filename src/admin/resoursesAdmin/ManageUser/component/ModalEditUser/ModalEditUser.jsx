import className from "classnames/bind";
import styles from "./ModalEditUser.module.scss";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import UserService from "../../../../../services/UserService";
import { IconPlus } from "@tabler/icons-react";
import { IconBackspaceFilled } from "@tabler/icons-react";

const cx = className.bind(styles);

function ModalEditUser(props) {
  // Test

  const { show, setShow, dataUserEdit, setDataEdituser, handleUpdateListUser } =
    props;
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [imageLocal, setImageLocal] = useState("");

  // Xu li anh lightbox

  useEffect(() => {
    if (dataUserEdit && dataUserEdit.id) {
      setId(dataUserEdit?.id || "");
      setName(dataUserEdit?.name || "");
      setPhone(dataUserEdit?.phone || "");
      setGender(dataUserEdit?.gender || "");
      setRole(dataUserEdit?.role || "");
      setEmail(dataUserEdit?.email || "");
      setImageLocal(dataUserEdit?.image || "");
    }
  }, [dataUserEdit]);

  const checkValidate = (reqUserEdit) => {
    if (!reqUserEdit.email.trim()) {
      toast.error("Nhập thiếu trường email !!!");
      return false;
    }

    if (!reqUserEdit.name.trim()) {
      toast.error("Nhập thiếu trường name !!!");
      return false;
    }

    if (!reqUserEdit.phone.trim()) {
      toast.error("Nhập thiếu trường phone !!!");
      console.log("Rong");
      return false;
    }

    if (!reqUserEdit.gender) {
      toast.error("Nhập thiếu trường gender !!!");
      return false;
    }

    if (!reqUserEdit.role) {
      toast.error("Nhập thiếu trường role !!!");
      return false;
    }

    return true;
  };

  const handleClose = () => {
    setName("");
    setPhone("");
    setGender("");
    setRole("");
    setEmail("");
    setId("");
    setImage("");
    setShow(false);
    setDataEdituser(null);
  };

  const handleImage = (e) => {
    let data = e.target.files;
    let file = data[0];
    console.log(">>>", file);

    if (file) {
      // if (file.type != "text/jpg" || file.type != "text/png") {
      //   toast.error("Chỉ upload ảnh .jpg or .png");
      //   return;
      // }
      const imageUrlLocal = URL.createObjectURL(file);
      setImage(file);
      setImageLocal(imageUrlLocal);
    }
  };

  const openPreviewImage = () => {
    alert("Phong to anh");
  };

  const handleDeleteImage = () => {
    alert("Delete anh");
  };

  const handleEditUser = async () => {
    try {
      // Check validate
      const reqUserEdit = { email, name, phone, gender, role, image };
      const checkData = checkValidate(reqUserEdit);

      if (checkData === false) {
        return;
      }

      // Init formData

      const formData = new FormData();
      formData.append("id", id);
      formData.append("email", email);
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("gender", gender);
      formData.append("role", role);
      formData.append("image", image);

      // Goi API

      const response = await UserService.updateUser(formData);

      if (response && response.data.EC === 0) {
        handleClose();
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
        onExit={() => setImageLocal("")}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit a User</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className={cx("modalAddUser")}>
            <div className={cx("form")}>
              <form>
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    value={email || ""}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Username */}
                <div className="form-group">
                  <label>Họ và tên</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label>Số điện thoại</label>
                  <input
                    type="text"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                {/* Gioi tinh */}
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input "
                    type="radio"
                    value="male"
                    id="male"
                    name="gender"
                    checked={gender === "male"}
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
                    name="gender"
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label className="form-check-label  " htmlFor="female">
                    Nữ
                  </label>
                </div>

                {/* Chuc vu */}
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

                {/* Image */}
                <div className="form-group my-3">
                  <p>Ảnh đại diện</p>
                  <label htmlFor="image">
                    <span className={cx("imageBorder")}>
                      <IconPlus height={60} width={50} color="green" />
                    </span>
                  </label>
                  <input
                    type="file"
                    className="form-control d-none"
                    id="image"
                    onChange={handleImage}
                  />

                  <img
                    src={
                      imageLocal ? imageLocal : "src/assets/imageNotFound.jpg"
                    }
                    alt="not found"
                    className={cx("imageInfo")}
                  />

                  <IconBackspaceFilled onClick={handleDeleteImage} />
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
