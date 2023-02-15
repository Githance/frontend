import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../../components/loader/loader";
import style from "./verify-email-page.module.css";
import { confirmUserEmail } from "../../services/slice/user-auth-slice";
import { getStatusVerifyMail } from "../../services/selectors/selectors";

function VerifyEmailPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const verifyMail = useSelector(getStatusVerifyMail());
  const { confirmCode } = useParams();

  useEffect(() => {
    if (confirmCode) {
      dispatch(confirmUserEmail(confirmCode)).then(() =>
        navigate("/auth/success")
      );
    }
  }, []);

  return (
    <div className={style.container}>{verifyMail ? <Loader /> : undefined}</div>
  );
}

export default VerifyEmailPage;
