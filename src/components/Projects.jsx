import React from "react";
import { information } from "../Data/data";
import "../CSS/Projects.css";

function Projects({id}) {
  return (
    <div id={id}>
      <section className="project-start">
        <h1>PROJECTS</h1>
        <div className="card-total">
          {information.map((res) => {
            return (
              <div className="card" >
                <img src={res.img} class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{res.title}</h5>
                  <p className="card-text">{res.description}</p>
                  <a href={res.link} class="btn btn-primary">
                    Github
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      </div>
  );
}

export default Projects;
