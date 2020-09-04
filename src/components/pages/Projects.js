import React from "react";
import Password from "../Password/Password";
import Pantheos from "../Pantheos/Pantheos";
import Employee from "../Employee/Employee";
import Weather from "../Weather/Weather";
import Recipe from "../Recipe/Recipe";
import Picture from "../images/projects.jpeg";

function Projects() {
  return (
    <div
      style={{
        backgroundImage: `url(${Picture})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
      }}
    >
      <h1>Project 1</h1>
      <Recipe />
      <h1> Project 2</h1>
      <Pantheos />

      <h1> Random Homework Assignments</h1>
      <Password />
      <Employee />
      <Weather />
    </div>
  );
}

export default Projects;
