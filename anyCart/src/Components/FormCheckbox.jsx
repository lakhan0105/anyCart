import React from "react";

function FormCheckbox({ name, label, defaultValue }) {
  return (
    <div className="form-checkbox">
      <label htmlFor={name}>{label}</label>
      <input name={name} type="checkbox" defaultChecked={defaultValue} />
    </div>
  );
}

export default FormCheckbox;
