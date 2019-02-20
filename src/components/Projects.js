import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Projects extends Component {
  renderListItem(item, i) {
    return (
      <div className="item" key={`project_item_${i}`}>
        {this.renderProjectTitle(item)}-
        <span
          style={{ margin: "0px 0px 0px 5px" }}
          className="project-tagline"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
      </div>
    );
  }
  renderProjectTitle(project) {
    let inner = project.title;
    if (project.url) {
      inner = (
        <a style={{ color: "#00FF00" }} href={project.url} target="_blank">
          {project.title}
        </a>
      );
    }
    return (
      <span className="project-title" style={{ margin: "0px 5px 0px 0px" }}>
        {inner}
      </span>
    );
  }
  renderIntro(description) {
    if (!description) {
      return null;
    }
    return (
      <div className="intro">
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    );
  }
  renderCategory(category) {
    return (
      <div className="category-item">
        <h5>{category.name}</h5>
        {category.list.map((item, i) => this.renderListItem(item, i))}
      </div>
    );
  }
  render() {
    const { icon, sectionTitle, categories, description } = this.props;
    return (
      <div className="projects2">
        {categories.map(c => {
          return this.renderCategory(c);
        })}
      </div>
    );
  }
}

Projects.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  description: PropTypes.string.isRequired,
  sectionTitle: PropTypes.string.isRequired,
  icon: PropTypes.string
};
