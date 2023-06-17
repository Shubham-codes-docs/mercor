import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faMessage,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import ProfileImage from "../../assets/profile.png";
import classes from "./navbar.module.css";

const Index = () => {
  return (
    <nav className={classes["navbar"]}>
      <div className="searchArea">
        <input
          type="text"
          placeholder="Search for anything..."
          className={classes["searchbar"]}
        />
      </div>
      <div className={classes["control-section"]}>
        <div className={classes["notification"]}>
          <FontAwesomeIcon icon={faCalendarDays} />
          <FontAwesomeIcon icon={faMessage} />
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className={classes["profile"]}>
          <div className={classes["profile-info"]}>
            <span className={classes["lead"]}>Anima Agarwal</span>
            <br />
            <span className={classes["accent"]}>U.P.,India</span>
          </div>
          <div className={classes["profile-image"]}>
            <img src={ProfileImage} alt="profile-image" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Index;
