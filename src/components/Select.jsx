import React from "react";

const Select = ({ onChange, label, options = [] }) => {
  const onSelectChange = event => onChange(event.target.value);

  return (
    <div className="form-group">
      <label>{label}</label>
      <select className="form-control" onChange={onSelectChange}>
        {options.map(({ value, label, color = "black" }) => (
          <option key={value} value={value} style={{ color: color }}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
