"use client";

import Image from "next/image";
import Link from "next/link";
import { navItems } from "./headerContent";
import MenuItems from "./MenuItems";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
const HeaderTwo = ({ variant }) => {
  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleMenu = () => {
    setClicked(!clicked);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });
  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <nav
      className={`navbar fixed-top bg-white py-0 
        ${navbar ? "navbar-fixed" : ""} `}
    >
      <div className="container">
        <div className="navbarMain">
          <Link href="./" className="navbar-brand">
            <Image
              src="/images/Kestone-logo.png"
              width={125}
              height={26}
              priority={true}
              alt="kestone Logo Main"
            />
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

export default HeaderTwo;
