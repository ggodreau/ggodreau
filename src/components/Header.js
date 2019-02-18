import React from "react";
import PropTypes from "prop-types";

const Header = props => (
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    <div className="content">
      <div className="inner">
        <h1>
          <span className="first">GODREAU</span>
          <span className="b1">.XYZ</span>
        </h1>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("intro");
            }}
          >
            INTRO
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("projects");
            }}
          >
            PRJCTS
          </a>
        </li>
        <li>
          <a
            href="/resume"
            onClick={() => {
              console.log("opening resume");
            }}
          >
            RSUME
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("contact");
            }}
          >
            CNTCT
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
};

export default Header;
