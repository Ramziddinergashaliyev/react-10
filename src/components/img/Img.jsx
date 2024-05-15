import React from "react";
import img from "../../assets/icons/i.jfif";
import "./img.scss";

function Img() {
  return (
    <div className="img">
      <img src={img} alt="" />
    </div>
  );
}

export default Img;
