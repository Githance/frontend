import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/loader";
import style from "./verify-email-page.module.css";

function VerifyEmailPage() {
  const dispatch = useDispatch();
  const { confirmCode } = useParams();

  useEffect(() => {
    if (confirmCode) {
      dispatch();
    }
  }, []);

  return (
    <div className={style.container}>
      <Loader />
    </div>
  );
}

export default VerifyEmailPage;
