import { FC } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Outlet } from "react-router-dom";

const layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default layout;
