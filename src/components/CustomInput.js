import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, classname, value, onchange, onBlur } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${classname}`}
        value={value}
        onChange={onchange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default CustomInput;
