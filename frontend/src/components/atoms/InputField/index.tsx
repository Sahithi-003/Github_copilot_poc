// write a code to render the text field in react typescript

import React from 'react';
import { TextField } from '@material-ui/core';

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<Props> = ({ label, name, value, onChange }) => {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
};

export default InputField;
