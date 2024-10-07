"use client";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "./headerContent";
import MenuItems from "./MenuItems";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";
const Header = ({ variant }) => {
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
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <nav
      className={`navbar fixed-top  py-0
        ${navbar ? "navbar-fixed " : ""} ${variant == "dark" ? "dark" : ""} 
        // ${variant == "white" ? "bg-white" : ""}
        `}
    >
      <div className="container">
        <div className="navbarMain">
          {variant == "dark" ? (
            <Link href="./" className="navbar-brand ">
              {navbar ? (
                <Image
                  src="/images/kestone-logo-white.png"
                  width={125}
                  height={26}
                  alt="kestone Logo white"
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
          ) : (
            <Link href="./" className="navbar-brand d-none d-md-flex">
              {navbar ? (
                <Image
                  src="/images/Kestone-logo.png"
                  width={125}
                  height={26}
                  alt="kestone Logo"
                  priority={true}
                />
              ) : (
                <Image
                  src="/images/kestone-logo-white.png"
                  width={125}
                  height={26}
                  alt="kestone Logo white"
                  priority={true}
                />
              )}
            </Link>
          )}

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

export default Header;
