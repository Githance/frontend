/* eslint-disable no-unused-vars */
import style from "./main-page.module.css";
import Presentation from "../../components/presentation/presentation";
import CardTable from "../../components/card-table/card-table";

function MainPage() {
  return (
    <main className={style.content}>
      <Presentation />
      <CardTable />
    </main>
  );
}

export default MainPage;
