import React from "react";
import Landing from "./Landing/Index";
import Todos from "./todos/Index";
import classes from "./home.module.css";

const Index = () => {
  return (
    <>
      <Landing />
      <div className={classes["showcase"]}>
        <Todos />
      </div>
    </>
  );
};

export default Index;
