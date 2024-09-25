"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SubMenuDropdown from "./SubMenuDropdown";
const MenuItems = ({ item, depth, clicked, setClicked }) => {
  const myref = useRef();

  const [showDropdown, setShowDropdown] = useState(false);
  // const handleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };

  // useEffect(() => {
  //   const myHandler = (event) => {
  //     if (
  //       showDropdown &&
  //       myref.current &&
  //       !myref.current.contains(event.target)
  //     ) {
  //       setShowDropdown(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", myHandler);
  // }, [showDropdown]);
  const onMouseEnter = () => {
    setShowDropdown(true);
  };
  const onMouseLeave = () => {
    setShowDropdown(false);
  };

  const closeOnMob = () => {
    if (window.matchMedia("(max-width: 767px)")) {
      clicked ? setClicked(!clicked) : clicked;
    }
  };
  const pathname = usePathname();
  return item.submenu && item.submenu.length > 0 ? (
    <li
      className="nav-item parent"
      ref={myref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="dropdownToggle"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <Link
          href={item.path}
          className={pathname == item.path ? "nav-link active" : "nav-link"}
          onClick={closeOnMob}
        >
          {item.title}
        </Link>
        {depth > 1 ? (
          <span className="submenuToggler">
            <i className="arrowRight"></i>
          </span>
        ) : (
          <span className="submenuToggler">
            <i className="arrowDown"></i>
          </span>
        )}
      </div>
      <SubMenuDropdown
        submenu={item.submenu}
        depth={depth}
        showDropdown={showDropdown}
        closeMenu={closeOnMob}
      />
    </li>
  ) : (
    <li className="nav-item">
      <Link
        href={item.path}
        className={
          pathname == item.path ? "dropdown-item active" : "dropdown-item"
        }
        onClick={closeOnMob}
      >
        {item.title}
      </Link>
    </li>
  );
};

export default MenuItems;
