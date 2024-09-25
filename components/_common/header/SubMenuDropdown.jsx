import React from "react";
import MenuItems from "./MenuItems";

const SubMenuDropdown = ({ submenu, depth, showDropdown, closeOnMob }) => {
  return (
    <ul
      className={`subMenuDropdown ${depth > 1 ? "subMenuDropdownRight" : ""} ${
        showDropdown ? "showDropdown" : "hideDropDown"
      }`}
    >
      {submenu.map((menu, index) => (
        <MenuItems
          item={menu}
          depth={depth + 1}
          key={index}
          closeOnMob={closeOnMob}
        />
      ))}
    </ul>
  );
};

export default SubMenuDropdown;
