import React from "react";

function Updates({ data }) {
  return (
    <>
      <div className="updates-container">
        {data.map((up, i) => (
          <div className="update" key={i}>
            <h4 className="update-title">{up.title}</h4>
            <p className="update-information">{up.update}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Updates;
