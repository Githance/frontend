import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import Loader from "../../components/UI/loader/loader";
import style from "./google-auth-page.module.css";
import { fetchGoogleDate } from "../../services/slice/user-auth-slice";

function GoogleAuthPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchCode] = useSearchParams();

  useEffect(() => {
    const code = searchCode.get("code");    
    if (code) {
      dispatch(fetchGoogleDate(code)).then(() => navigate("/"));
    }
  }, []);

  return (
    <div className={style.container}>
      <Loader />
    </div>
  );
}

export default GoogleAuthPage;
