import React from "react";

function FormSelect({ label, type, name, defaultValue, list }) {
  return (
    <div className="form-select">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>

      <select name={name} id={name} defaultValue={defaultValue}>
        {list.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FormSelect;
