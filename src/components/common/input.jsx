import React from "react";

const Input = ({ name, lable, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}> {lable}</label>{" "}
      <input {...rest} id={name} name={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
