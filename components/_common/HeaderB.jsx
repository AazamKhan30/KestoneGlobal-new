"use client";

import Image from "next/image";
import Link from "next/link";
import { navItems } from "../_common/header/headerContent";
import MenuItems from "./MenuItems";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
const HeaderB = ({ variant }) => {
  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleMenu = () => {
    setClicked(!clicked);
  };
  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav
      className={`navbar fixed-top  py-0 bg-white
        ${navbar ? "navbar-fixed" : ""}`}
    >
      <div className="container">
        <div className="navbarMain">
          <Link href="./" className="navbar-brand">
            {variant == "light" ? (
              <Image
                src="/images/kestone-logo.png"
                width={125}
                height={26}
                alt="kestone Logo"
              />
            ) : (
              <Image
                src="/images/kestone-logo-white.png"
                width={125}
                height={26}
                alt="kestone Logo"
              />
            )}
          </Link>
          <div className="menuToggler d-block d-md-none" onClick={handleMenu}>
            <AiOutlineMenu />
          </div>

          <ul className={clicked ? "navMenu mb-0 show" : "navMenu mb-0"}>
            {navItems.map((item, index) => (
              <MenuItems
                item={item}
                key={index}
                depth={1}
                clicked={clicked}
                setClicked={setClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default HeaderB;
