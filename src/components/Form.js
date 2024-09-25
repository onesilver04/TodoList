import React from "react";
import "./Form.css";

const Form = ({ value, onChange, onCreate, onKeyPress, onDelete }) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <div className="create-button" onClick={onCreate}>
        ADD
      </div>
    </div>
  );
};

export default Form;
