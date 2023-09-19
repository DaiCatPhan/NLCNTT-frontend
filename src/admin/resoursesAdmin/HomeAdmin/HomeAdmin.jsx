import className from "classnames/bind";
import styles from "./HomeAdmin.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthenticationService from "../../../services/AuthenticationService";

const cx = className.bind(styles);

function HomeAdmin() {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const handleGetProFile = async () => {
      let dataUser = await AuthenticationService.getProfile();
      setProfile(dataUser.data);
    };
    handleGetProFile();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <h1>{profile?.email}</h1>
      <h1>Home Admin</h1>
    </div>
  );
}

export default HomeAdmin;
