import React from "react";

function FormSelect({ label, type, name, defaultValue, list }) {
  return (
    <div className="form-select">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      {/* <input type={type} name={name} id={name} defaultValue={defaultValue} /> */}
      <select name={name} id={name}>
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
