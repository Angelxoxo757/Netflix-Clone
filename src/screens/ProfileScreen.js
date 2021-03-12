import React from "react";
import { selectUser } from "../features/userSlice";
import Nav from "../Nav";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://i0.wp.com/jimheath.tv/wp-content/uploads/2019/04/lucifer-season-4-netflix.jpg?ssl=1"
            alt=""
          />
          <div className="profileScreen__details">
            <h2></h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
