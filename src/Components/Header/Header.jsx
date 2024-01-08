import React, { useRef, useEffect } from "react";
import "./Header.css";
import { Container, Row } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../assets/images/eco-logo.png";
import Uicon from "../../assets/images/user-icon.png";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { Link } from "react-router-dom";
import Blank from "./blank";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
function Header(props) {
  const totalQ = useSelector((state) => state.cart.totalQuantity);

  const nav_link = [
    {
      path: "home",
      display: "Home",
    },
    {
      path: "shop",
      display: "Shop",
    },
    {
      path: "cart",
      display: "Cart",
    },
  ];
  const headerRef = useRef(null);

  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };
  useEffect(() => {
    stickyHeader();
    return () => window.removeEventListener("scroll", stickyHeader);
  });
  const menuToggel = () => menuRef.current.classList.toggle("active_menu");
  const navigateToCart = () => {
    navigate("/cart");
  };
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/home");
      })
      .catch((err) => {
        toast.error("err.message");
      });
  };
  return (
    <header className="header" ref={headerRef}>
      <Container className="">
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={Logo} alt="logo" />
              <h1>Deep</h1>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggel}>
              <ul className="menu">
                {nav_link.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav_active " : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav_icons">
              <div className="profile">
                <span>
                  {/* <motion.img whileTap={{ scale: 1.3 }} src={Uicon} alt="" /> */}
                  <motion.h6 whileTap={{ scale: 1.3 }}>
                    hello,{currentUser ? currentUser.displayName : Blank}
                  </motion.h6>
                </span>
              </div>
              <div className="profile__action">
                {currentUser ? (
                  <button>
                    {" "}
                    <span onClick={logout}>Logout</span>
                  </button>
                ) : (
                  <div className="sing">
                    <button className="bt">
                      {" "}
                      <Link className="a" to="/Singup">
                        Singup
                      </Link>
                    </button>
                    <button>
                      {" "}
                      <Link className="b" to="/login">
                        login
                      </Link>
                    </button>
                  </div>
                )}
              </div>
              <span className="fav_icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart_icon" onClick={navigateToCart}>
                <i class="ri-shopping-cart-line"></i>
                <span className="badge">{totalQ}</span>
              </span>

              <div className="mobile-menu">
                <span onClick={menuToggel}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
