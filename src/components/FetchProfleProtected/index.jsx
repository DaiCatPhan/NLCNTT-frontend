import { useEffect, useState } from "react";
import AuthenticationService from "../../services/AuthenticationService";
import { useDispatch } from "react-redux";
import { toggleLogin } from "../../redux/reducers/userSlice";

function FetchProfleProtected({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleGetProFile = async () => {
      try {
        let res = await AuthenticationService.getProfile();
        if (res.status === 200 && res.data.id) {
          dispatch(
            toggleLogin({
              name: res.data.name,
              email: res.data.email,
              role: res.data.role,
            }) // type: user/toggleLogin
          );
        }
      } catch (e) {
        console.log("e", e);
      }
    };
    handleGetProFile();
  }, []);

  return <>{children}</>;
}

export default FetchProfleProtected;
