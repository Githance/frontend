import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/loader/loader";
import style from "./google-auth-page.module.css";
import { fetchGoogleDate } from "../../services/slice/user-auth-slice";

function GoogleAuthPage() {
  const dispatch = useDispatch();

  const [searchCode] = useSearchParams();

  useEffect(() => {
    const code = searchCode.get("code");
    console.log(code);
    if (code) {
      dispatch(fetchGoogleDate(code)).then(() => console.log("2"));
    }
  }, []);

  return (
    <div className={style.container}>
      <Loader />
    </div>
  );
}

export default GoogleAuthPage;
