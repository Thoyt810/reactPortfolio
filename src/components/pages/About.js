import React from "react";
import Picture from "../images/space.jpeg";

function About() {
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
      <section>
        <div>
          <article>
            <h1>About Me</h1>
            <hr />
            <p>
              My name is Thomas Hoyt, currently in training to become a full
              certified full stack web developer here in lovely Colorado. I am
              currently a automation technician in Northern Colorado. I always
              found myself seeking more from work in a way that challenged me
              but still continued alllow me a creative outlet to express myself.
              I come from 0 background training in computers but thi scourse has
              taught me so much and shown me that I am willing to spend the
              hours necessary to accomplish anything. I am an outdoorsy person
              that likes to spend life on the move and seeing new things.
              Whether it be hiking any sport that can keep me moving I will not
              say no. I hope to eventuallly find a spot where I can offer the
              skills I have learned to make a great contribution to wherever
              would provide an oppurtunity. Spending time with family and
              friends is what i find most grounding, they are all wonderful
              people who I can rely on for support and a good laugh whenever I
              need it.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default About;
