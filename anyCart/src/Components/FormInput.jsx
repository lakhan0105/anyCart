import React from "react";

function FormInput({ name, type, label, defaultValue }) {
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} defaultValue={defaultValue} />
    </div>
  );
}

export default FormInput;
