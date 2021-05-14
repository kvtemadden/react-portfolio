import React from 'react';

function Project(props) {

    return (
        <div>
        <div className="row bg">
            <button className="col btn btn-pink mt-1" type="button" data-toggle="collapse" data-target={"#" + `${props.name}`.toLowerCase()} aria-expanded="false" aria-controls={`${props.name}`.toLowerCase()}>
              {props.name}
            </button>
          </div>
        
         <div className="collapse" id={`${props.name}`.toLowerCase()}>
          <h4>{`${props.name}`}</h4>
          <p><a href={`${props.git_url}`} target="_blank" rel="noreferrer" title={`${props.desc}`}>Take a peek!</a>
          </p>
          <img className="frame img-fluid" src={`${props.thumbnail}`} alt={`${props.thumbnail_alt}`} />
        </div>
        </div>
    );
}
export default Project;