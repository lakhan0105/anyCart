import React, { useState } from "react";

function FormRange({ name, label, defaultValue }) {
  const [priceVal, setPriceVal] = useState(defaultValue || 100000);

  return (
    <div className="form-range">
      <label htmlFor={name}>
        {label}: ${priceVal / 100}
      </label>

      <input
        type="range"
        name={name}
        max={100000}
        step={1000}
        defaultValue={priceVal}
        onChange={(e) => {
          setPriceVal(e.target.value);
        }}
      />
    </div>
  );
}

export default FormRange;
