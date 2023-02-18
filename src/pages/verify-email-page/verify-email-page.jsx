import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../../components/loader/loader";
import style from "./verify-email-page.module.css";
import { confirmUserEmail } from "../../services/slice/user-auth-slice";

function VerifyEmailPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { confirmCode } = useParams();

  useEffect(() => {
    if (confirmCode) {
      dispatch(confirmUserEmail(confirmCode)).then(() =>
        navigate("/")
      );
    }
  }, []);

  return (
    <div className={style.container}>      
      <Loader />
    </div>
  );
}

export default VerifyEmailPage;
