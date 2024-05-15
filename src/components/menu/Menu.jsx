import React from "react";
import img from "../../assets/icons/bars.svg";
import people from "../../assets/icons/img.jfif";
import "./menu.scss";

function Menu() {
  return (
    <div className="products__top">
      <img src={img} alt="" />
      <div className="products__top__right">
        <p className="products__top__title">John doe</p>
        <img src={people} alt="" />
      </div>
    </div>
  );
}

export default Menu;
