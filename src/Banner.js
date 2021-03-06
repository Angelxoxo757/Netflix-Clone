import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://getyourcomicon.co.uk/wp-content/uploads/2020/07/Lucifer_Seaosn_5_Banner_1.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents"></div>
    </header>
  );
}

export default Banner;
