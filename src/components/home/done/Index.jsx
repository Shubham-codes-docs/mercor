import React from "react";
import Card from "../../cards/Index";
import Profile from "../../../assets/Profile.png";
import classes from "./done.module.css";

const Index = () => {
  const todos = [
    {
      id: 1,
      importance: "Completed",
      heading: "Onboarding Illustrations ",
      body: "Brainstorming brings team members' diverse experience into play. ",
      profiles: [Profile, Profile, Profile],
      comments: 12,
      files: 15,
    },
    {
      id: 2,
      importance: "Completed",
      heading: "Moodboard",
      body: "User research helps you to create an optimal product for users. ",
      profiles: [Profile, Profile],
      comments: 12,
      files: 15,
    },
  ];

  return (
    <div className={classes["todos"]}>
      <div className={classes["todos-wrapper"]}>
        <div className={classes["highlight-section"]}>
          <span className={classes["highlight"]}></span>
          <h6>To Do</h6>
          <div className={classes["notification"]}>3</div>
        </div>
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
            key={todo.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
