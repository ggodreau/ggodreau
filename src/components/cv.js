import React, { Component } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "../assets/css/styles-6.css";
import Section from "./resume/section";
import Sidebar from "./resume/sidebar";
import Experience from "./resume/experience";
import Projects from "./resume/projects";
import Tags from "./resume/tags";

export default class CV extends Component {
  renderExperienceSection() {
    if (this.props.experience) {
      console.log("exp: ", ...this.props.experience);
      return <Experience {...this.props.experience} />;
    }
    return null;
  }

  renderProjectsSection() {
    if (this.props.projects) {
      return <Projects {...this.props.projects} />;
    }
    return null;
  }

  renderTags() {
    if (this.props.tags) {
      return <Tags {...this.props.tags} />;
    }
    return null;
  }

  renderCareerProfile() {
    const { icon, sectionTitle, description } = this.props.careerProfile;
    const innerContent = (
      <div
        className="summary"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    );
    return (
      <Section
        className="summary-section"
        icon={icon || "user"}
        title={sectionTitle || "Career Profile"}
      >
        {innerContent}
      </Section>
    );
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar {...this.props.profile} />
        <div className="main-wrapper">
          {this.renderCareerProfile()}
          {this.renderExperienceSection()}
          {this.renderProjectsSection()}
          {this.renderTags()}
        </div>
      </div>
    );
  }
}

CV.propTypes = {
  profile: PropTypes.shape().isRequired,
  careerProfile: PropTypes.shape().isRequired,
  experience: PropTypes.shape().isRequired,
  projects: PropTypes.shape().isRequired,
  tags: PropTypes.shape().isRequired
};
