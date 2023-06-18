import React from "react";
import Landing from "./Landing/Index";
import Todos from "./todos/Index";
import OnProgress from "./onProgress/Index";
import Done from "./done/Index";
import classes from "./home.module.css";

const Index = () => {
  return (
    <>
      <Landing />
      <div className={classes["showcase"]}>
        <Todos />
        <OnProgress />
        <Done />
      </div>
    </>
  );
};

export default Index;
