import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/header/Header";
import HeaderLeft from "../components/header/HeaderLeft";

import { AppContext } from "../context/Context";

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
    </Fragment>
  );
};

export default Layout;
