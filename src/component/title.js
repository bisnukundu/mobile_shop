import React from "react";
const Title = ({ name, title }) => {
  return (
    <React.Fragment>
      <h1>
        {name} <strong>{title}</strong>
      </h1>
    </React.Fragment>
  );
};
export default Title;
