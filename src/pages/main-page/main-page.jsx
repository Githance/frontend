/* eslint-disable no-unused-vars */
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import style from "./main-page.module.css";
import Presentation from "../../components/presentation/presentation";
import CardTable from "../../components/card-table/card-table";

function MainPage() {
  return (
    <main className={style.container}>
      <Header />
      <Presentation />
      <CardTable />
      <Footer/>
    </main>
  );
}

export default MainPage;
