import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  // USING BEM
  const [show, handleShow] = useState(false);

  const trasitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", trasitionNavbar);
    return () => window.removeEventListener("scroll", trasitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          className="nav__avatar"
          src="https://i0.wp.com/jimheath.tv/wp-content/uploads/2019/04/lucifer-season-4-netflix.jpg?ssl=1"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
