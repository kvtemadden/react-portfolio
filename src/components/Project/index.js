import React from 'react';

function Project(props) {

    return (
      <figure>
      <img src={`${props.thumbnail}`} alt={`${props.desc}`} />
      <figcaption>
        {props.name}
        <br />
        <a href={`${props.proj_url}`} target="_blank" rel="noreferrer" title={`${props.desc}`}>Take a peek!</a>  ||  <a href={`${props.git_url}`} target="_blank" rel="noreferrer" title={`${props.desc}`}>View the Repository</a>
      </figcaption>
       </figure>
    );
}
export default Project;