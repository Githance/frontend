import style from "./profile-page.module.css";
import MainInput from "../../components/main-input/main-input";

function ProfilePage() {
  return (
    <div className={style.profile}>
      <MainInput value="text"/>
    </div>
  );
}

export default ProfilePage;
