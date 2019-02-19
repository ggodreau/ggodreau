import React from "react";
import CV from "../components/cv";
import Data from "../data";
import { Link } from "gatsby";

const resume = () => (
  <div className="wrapperwrap">
    <Link to="/" target="_blank" rel="noopener noreferrer">
      Go back to the homepage
    </Link>
    <p />
    <CV {...Data} />
  </div>
);

export default resume;
