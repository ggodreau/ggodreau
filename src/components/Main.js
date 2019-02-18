import React from "react";
import PropTypes from "prop-types";

import pic01 from "../images/pic01.jpg";
import pic02 from "../images/pic02.jpg";
import pic03 from "../images/pic03.jpg";

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      />
    );

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <article
          id="intro"
          className={`${this.props.article === "intro" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            I'm Gregory Godreau. I'd say I'm a software developer but that's a
            bit of a stretch. Let's be honest - I'm really just some guy with a
            computer and an internet connection.
          </p>
          <p>
            I live two lives. One life is as a data science instructor /
            curriculum developer for
            <a
              href="https://generalassemb.ly/instructors/gregory-gordeau/15006"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              General Assembly.{" "}
            </a>
            The other life is as a remote contract developer for startups.
            Outside that, I spend pretty much all my free time building
            projects, learning new things, and trying to contribute to the open
            source community.
            <a
              href="https://knowyourmeme.com/memes/but-its-honest-work"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              It ain't much, but it's honest work.{" "}
            </a>
          </p>
          <p>
            Although I work with a bunch of different stacks and tools,{" "}
            <i>my focus is generally on data and devops.</i> I place a lot of
            value on being able to operationalize pipelines at production scale.
          </p>
          <p>
            Feel free to check out
            <a href="/page-2" target="_blank" rel="noopener noreferrer">
              {" "}
              my work{" "}
            </a>
            and drop me a line in the contact form if there's anything I can
            help you with. Thanks for reading.
          </p>
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === "projects" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>My projects paragraph 1</p>
          <p>My projects paragraph 2</p>
          {close}
        </article>

        <article
          id="resume"
          className={`${this.props.article === "resume" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Resume</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>resume section</p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === "contact" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.github.com/ggodreau"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/godreau"
                className="icon fa-linkedin-square"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/jesuisgreg"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://austin-deep-learning.slack.com"
                className="icon fa-slack"
              >
                <span className="label">Slack</span>
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/channel/UC0VSRc1kNM68xRgs8rqESMg"
                className="icon fa-youtube-play"
              >
                <span className="label">YouTube</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired
};

export default Main;
