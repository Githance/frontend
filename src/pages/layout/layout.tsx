import { FC } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <div style={{ flex: '1 1 auto' }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
