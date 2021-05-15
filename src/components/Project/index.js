import React from 'react';

function Project(props) {

    return (
      <figure>
      <h5>{props.name}</h5>
      <img src={`${props.thumbnail}`} alt={`${props.desc}`} />
      <figcaption>
        <a href={`${props.proj_url}`} target="_blank" rel="noreferrer" title={`${props.desc}`}>Take a peek!</a>  ||  <a href={`${props.git_url}`} target="_blank" rel="noreferrer" title={`${props.desc}`}>GitHub Repo</a>
      </figcaption>
       </figure>
    );
}
export default Project;