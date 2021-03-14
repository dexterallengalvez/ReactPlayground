import React from "react";

import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

const Select = (props) => {
  const {
    name,
    label,
    value,
    variant,
    onChange,
    options,
    error = null,
    ...other
  } = props;

  return (
    <FormControl
      variant={variant || "outlined"}
      {...(error && { error: true })}
    >
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        {...other}
      >
        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {" "}
            {item.title}{" "}
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
