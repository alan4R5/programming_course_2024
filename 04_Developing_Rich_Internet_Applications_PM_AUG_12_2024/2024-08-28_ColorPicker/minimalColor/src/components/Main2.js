import React from "react";
import Img1 from "../images/coding.jpg";

const Main = () => {
  return (
    <section>
      <h3>CJ is learning to code</h3>

      <img width={300} height={200} src={Img1} alt="Coding" />
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    </section>
  );
};

export default Main;
