import React from "react";
import project_info from "../utils/projects";
import Project from "../components/Project"
import { Container } from "../components/Grid";

export function Portfolio() {

  return (
<div>
<section className="mx-auto mt-5 container">
    <div className="row bg portfolio">
      <h2 class="col-12">Portfolio</h2>
              {project_info.map((project, index) => {
                  console.log(project);
                return <Project key={project._id} name={project.name} desc={project.desc} git_url={project.git_url} proj_url={project.proj_url} thumbnail={project.thumbnail} />
              })}
    </div>
  </section>
</div>
);
}

export default Portfolio;