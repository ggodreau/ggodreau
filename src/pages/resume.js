import React from "react";
import CV from "../components/cv";
import Data from "../data";

const resume = () => (
  <div className="wrapperwrap">
    <a href="/" rel="noopener noreferrer">
      Go back to the homepage
    </a>
    <p />
    <CV {...Data} />
  </div>
);

export default resume;
