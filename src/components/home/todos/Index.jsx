import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import Card from "../../cards/Index";
import Profile from "../../../assets/Profile.png";
import classes from "./todos.module.css";

const Index = () => {
  const todos = [
    {
      id: 1,
      importance: "Low",
      heading: "Brainstorming",
      body: "Brainstorming brings team members' diverse experience into play. ",
      profiles: [Profile, Profile, Profile],
      comments: 12,
      files: 0,
    },
  ];

  return (
    <div className={classes["todos"]}>
      <div className={classes["todos-wrapper"]}>
        <div className={classes["highlight-section"]}>
          <span className={classes["highlight"]}></span>
          <h6>To Do</h6>
          <div className={classes["notification"]}>4</div>
        </div>
        <FontAwesomeIcon
          icon={faSquarePlus}
          style={{
            color: "#5030e580",
            fontSize: "1.563rem",
            aspectRatio: 1,
            borderRadius: "6px",
            fontWeight: "100",
            marginRight: "0.5rem",
            marginBottom: "23px",
          }}
        />
      </div>
      <div className={classes["todos-container"]}>
        {todos.map((todo) => (
          <Card
            importance={todo.importance}
            heading={todo.heading}
            body={todo.body}
            profiles={todo.profiles}
            comments={todo.comments}
            files={todo.files}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
