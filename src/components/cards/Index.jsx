import React from "react";
import Profile from "../../assets/Profile.png";
import classes from "./cards.module.css";

const Index = ({ importance, heading, body, profiles, comments, files }) => {
  return (
    <div className={classes["cards"]}>
      <div className={classes["importance"]}>
        <span
          style={{
            backgroundColor:
              importance === "Low"
                ? "#DFA87480"
                : importance === "High"
                ? "#D8727D90"
                : "#83c29D80",
            color:
              importance === "Low"
                ? " #D58D49"
                : importance === "High"
                ? "#D8727D"
                : "#68B266",
          }}
        >
          {importance}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
        </svg>
      </div>
      <div className={classes["info"]}>
        <h6>{heading}</h6>
        <p>{body}</p>
      </div>

      <div className={classes["comments"]}>
        <div className={classes["users"]}>
          {profiles.map((profile) => (
            <img src={profile} alt="profile" />
          ))}
        </div>
        <div className={classes["action-info"]}>
          <span className={classes["comment-info"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" />
            </svg>
            {`${comments} `}
            comments
          </span>
          <span className={classes["file-info"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" />
            </svg>
            {`${files} `}
            files
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
