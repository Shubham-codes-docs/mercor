import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePen,
  faLink,
  faSquarePlus,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import Profile from "../../../assets/profile.png";
import classes from "./landing.module.css";

const Index = () => {
  return (
    <div className={classes["landing-wrapper"]}>
      <div className={classes["info"]}>
        <div className={classes["landing"]}>
          <h2 className={classes["landing-heading"]}>Mobile App</h2>
          <div className={classes["edit"]}>
            <FontAwesomeIcon
              icon={faSquarePen}
              style={{
                color: "#5030e580",
                fontSize: "1.563rem",
                aspectRatio: 1,
                borderRadius: "6px",
              }}
            />
            <FontAwesomeIcon
              icon={faLink}
              style={{
                color: "#5030e580",
                fontSize: "1.563rem",
                aspectRatio: 1,
                borderRadius: "6px",
              }}
            />
          </div>
        </div>
        <div className={classes["filter"]}>
          <select>
            <option value="">Filter</option>
          </select>
          <select>
            <option value="">Today</option>
          </select>
        </div>
      </div>
      <div className={classes["invite-wrapper"]}>
        <div className={classes["invite"]}>
          <FontAwesomeIcon
            icon={faSquarePlus}
            style={{
              color: "#5030e580",
              fontSize: "1.563rem",
              aspectRatio: 1,
              borderRadius: "6px",
              fontWeight: "100",
              marginRight: "0.5rem",
            }}
          />
          <h6>Invite</h6>
          <div className={classes["invitees"]}>
            <img src={Profile} alt="invite" />
            <img src={Profile} alt="invite" />
            <img src={Profile} alt="invite" />
            <img src={Profile} alt="invite" />
          </div>
        </div>
        <div className={classes["controls"]}>
          <button className={classes["share"]}>
            <FontAwesomeIcon icon={faUserGroup} /> Share
          </button>
          {/* <span className={classes["separator"]}>|</span> */}
          <div className={classes["menu"]}>
            <span>-</span>
            <br />
            <span>-</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
