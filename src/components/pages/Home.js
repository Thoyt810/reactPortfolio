import React from "react";
import Picture from "../images/mountain.jpg";

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${Picture})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        color: "white",
      }}
    >
      <h1>Main Page</h1>
      <p>
        Welcome to my portfolio! I focus on Javascript and Back-end server work
        mainly, but am still trying to figure out React! (Sorry in advnace) Over
        the course we have been introduced to so many ideas and new ways of
        thinking that involves the technology we use everyday. Attending the all
        online section of class due to the recent pandemic has only emphasized
        the importance of being able to work efficiently with/on computers. As
        the world progresses to be more and more technology based a course like
        BCS has given me the oppurtunity and headstart to stand apart in a
        growing field of creative and brilliant indivduals. (Most importantly
        the person reading this)
      </p>
    </div>
  );
}

export default Home;
