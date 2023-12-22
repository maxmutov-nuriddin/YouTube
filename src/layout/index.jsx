import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";


import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { AppContext } from "../context/Context";
import HeaderLeft from "../components/header/HeaderLeft";

const Layout = () => {
  const { values } = useContext(AppContext);

  return (
    <Fragment>  
      <Header />
      <div className={`AllPageVideo__sidebar ${values ? '' : 'close'}`}>
        <HeaderLeft />
      </div>
      <div className={`AllPageVideo__content position-relative ${values ? '' : 'none'}`}>
        <main className="container">
          <Outlet />
        </main>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
