import React from "react";
import project_info from "../utils/projects";
import Project from "../components/Project"
import { Col, Row, Container } from "../components/Grid";

export function Portfolio() {

  return (
<div>
<section className="mx-auto mt-5 container">
    <div className="row bg">
      <h2>Portfolio</h2>
      <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
        <Container>
              {project_info.map((project, index) => {
                  console.log(project);
                return <Project key={project._id} name={project.name} desc={project.desc} github_url={project.github_url} thumbnail_alt={project.thumbnail_alt} thumbnail={project.thumbnail} />
              })}
        </Container>
      </div>
    </div>
  </section>
</div>
);
}

export default Portfolio;