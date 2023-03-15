import { useCallback } from "react";
import style from "./profile-page.module.css";
import MainInput from "../../components/main-input/main-input";

function ProfilePage() {
  const onSubmit = useCallback((e) => e.preventDefault());
  return (
    <div className={style.profile}>
      <MainInput value="text" type="primary" onSubmit={onSubmit} />
    </div>
  );
}

export default ProfilePage;
