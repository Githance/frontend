/* eslint-disable no-unused-vars */
import Header from "../../components/header/header";
import style from "./main-page.module.css";
import Presentation from "../../components/presentation/presentation";

function MainPage() {
  return (
    <main className={style.container}>
  <Header />
  <Presentation/>
  </main>
  );
}

export default MainPage;
