import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";
import icon from "./Hamberger.png";
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className={Styles.nav}>
      <h1 className={Styles.title}>Media Pilot</h1>
      {(toggleMenu || screenWidth > 500) && (
        <ul className={Styles.list}>
          <li className={Styles.items}>
            <Link to="/" className={Styles.items}>
              Services
            </Link>
          </li>
          <li className={Styles.items}>
            <Link to="/" className={Styles.items}>
              Pricing
            </Link>
          </li>
          <li className={Styles.items}>
            <Link to="/" className={Styles.items}>
              About Us
            </Link>
          </li>
          <li className={Styles.items}>
            <Link to="/" className={Styles.items}>
              Resources
            </Link>
          </li>
          <li>
            <a className={Styles.login}>Login/Register</a>
          </li>
        </ul>
      )}
      <button onClick={toggleNav} className={Styles.hambergerBtn}>
        <img className={Styles.img} src={icon} alt="Menu" />
      </button>
    </nav>
  );
}
