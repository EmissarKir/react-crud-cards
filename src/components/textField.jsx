import React from "react";
import PropTypes from "prop-types";

const TextField = ({
  label,
  type,
  name,
  value,
  handleChange,
  error,
  touched,
}) => {
  const getInputClasses = () => {
    return "form-control " + (error && touched ? "is-invalid" : "");
  };

  return (
    <div className="mb-4">
      <label htmlFor={name} className="form-label">
        {label}
      </label>

      <input
        type={type}
        className={getInputClasses()}
        onChange={handleChange}
        id={name}
        name={name}
        value={value}
        touched={touched}
      />

      {error && !!touched && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  error: PropTypes.string,
};

export default TextField;
