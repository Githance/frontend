import { useCallback } from "react";
import style from "./profile-page.module.css";
import MainInput from "../../components/main-input/main-input";
import MainLink from "../../components/main-link/main-link";

function ProfilePage() {
  const onSubmit = useCallback((e) => e.preventDefault());

  return (
    <div className={style.profile}>
      <MainInput value="text" type="primary" onSubmit={onSubmit} />
      <MainLink link="link" onSubmit={onSubmit} type="secondary">
        Портфолио
      </MainLink>
    </div>
  );
}

export default ProfilePage;
