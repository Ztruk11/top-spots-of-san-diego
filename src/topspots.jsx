import React from "react";

export default props => (
  <div className="well border border-white rounded p-3 m-3">
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <a
      href={`https://maps.google.com/?q=${props.location[0]},${
        props.location[1]
      }`}
    >
      <button className="btn btn-info">MAP</button>
    </a>
  </div>
);
