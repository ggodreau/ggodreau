import React from "react";
import CV from "../components/cv";
import Data from "../data";
import { Link } from "gatsby";

import Layout from "../components/layout";

const resume = () => (
  <div>
    <Link to="/" target="_blank" rel="noopener noreferrer">
      Go back to the homepage
    </Link>
    <p />
    <CV {...Data} />
  </div>
);

export default resume;
