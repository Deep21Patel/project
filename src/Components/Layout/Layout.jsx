import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../Routers/Routers";
import AdminNav from "../../admin/AdminNav";
import { useLocation } from "react-router-dom";
function Layout(props) {
  const location = useLocation();
  return (
    <>
      {location.pathname.startsWith("/dashboard") ? <AdminNav /> : <Header />}
      {/* <AdminNav />
      <Header /> */}

      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
