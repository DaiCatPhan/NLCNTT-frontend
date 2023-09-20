import className from "classnames/bind";
import styles from "./HomeAdmin.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../redux/selector";
import { logout } from "../../../redux/reducers/userSlice";
import AuthenticationService from "../../../services/AuthenticationService";
import useAuth from "../../../hook/useAuth";
import { useNavigate } from "react-router-dom";
const cx = className.bind(styles);

function HomeAdmin() {
  const navigate = useNavigate();
  const { isLogged, role, profile } = useAuth();
  if (!isLogged || role === "admin") {
    return <p>Ban k co quyen truyc ap</p>;
  }
  const dispatch = useDispatch();
  async function handleClickLogout() {
    const res = await AuthenticationService.logoutApi();
    console.log("res", res);
    dispatch(logout());
    navigate("/authentication/login");
  }
  return (
    <div className={cx("wrapper")}>
      <button onClick={handleClickLogout}>loggout</button>
      <h1>profile?.email: {profile.email}</h1>
      <h1>Home Admin</h1>
    </div>
  );
}

export default HomeAdmin;
