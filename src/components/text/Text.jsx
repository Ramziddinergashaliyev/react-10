import React from "react";
import "./text.scss";

function Text() {
  return (
    <div className="text">
      <h1 className="text__title">Overview</h1>
      <div className="text__btns">
        <button className="text__btn">...</button>
        <button className="text__btn text__add__btn">Add</button>
      </div>
    </div>
  );
}

export default Text;
