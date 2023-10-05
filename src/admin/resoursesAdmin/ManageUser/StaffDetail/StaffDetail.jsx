import className from "classnames/bind";
import styles from "./StaffDetail.module.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IconArrowNarrowLeft, IconPencil } from "@tabler/icons-react";
import Form from "react-bootstrap/Form";
import UserService from "../../../../services/UserService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const cx = className.bind(styles);

function StaffDetail() {
  let params = useParams();
  const navigate = useNavigate();
  const [id, setId] = useState(params?.id);
  const [dataUser, setdataUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const getStaffData = await UserService.getUserOnly(id);
      if (
        getStaffData &&
        getStaffData.data.DT.id &&
        getStaffData.data.EC === 0
      ) {
        setdataUser(getStaffData.data.DT);
      } else {
        toast.error("Không tìm thấy nhân viên !!!");
        navigate("/user-listUser");
      }
    };
    fetchData();
  }, []);

  return (
    <div className={cx("wrapper")}>
      <Link to={"/user-listUser/"}>
        <IconArrowNarrowLeft className={cx("backIcon")} />
      </Link>
      <div className={cx("bodyWrapper")}>
        <div className={cx("personInfo")}>
          <img src={dataUser.image} alt="not found" />
          <button>Connect to Linkedln</button>
          <div className={cx("editIcon")}>
            <IconPencil /> {dataUser.createdAt}
          </div>
        </div>
        <div className={cx("profile")}>
          <h1 className="text-center">-- Profile --</h1>
          <Form className="w-75 m-auto ">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              {/* <Form.Control
                size="lg"
                className="p-3 fs-3 border-dark text-dark"
                defaultValue={dataUser?.email}
              /> */}
              <p className={cx("border-dark border p-3 fs-3 rounded")}>
                {dataUser?.email}
              </p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Username</Form.Label>

              <p className={cx("border-dark border p-3 fs-3 rounded")}>
                {dataUser?.name}
              </p>
            </Form.Group>

            <div className={cx("d-flex flex-wrap   justify-content-between ")}>
              <Form.Group
                className="mb-3 w-50   "
                controlId="formBasicPassword"
              >
                <Form.Label>Chức vụ</Form.Label>

                <p className={cx("border-dark border   p-3 fs-3 rounded")}>
                  {dataUser?.role}
                </p>
              </Form.Group>
              <Form.Group className="mb-3  flex-grow-1 mx-2  " controlId="formBasicPassword">
                <Form.Label>Giới tính</Form.Label>

                <p className={cx("border-dark border   p-3 fs-3 rounded")}>
                  {dataUser?.gender}
                </p>
              </Form.Group>
            </div>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone</Form.Label>

              <p className={cx("border-dark border p-3 fs-3 rounded")}>
                {dataUser?.phone}
              </p>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default StaffDetail;
