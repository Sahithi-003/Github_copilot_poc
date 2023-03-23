// create atom Radiobutton from mui along with its story and unit testcase

import React from "react";
import { Radio, FormControlLabel } from "@material-ui/core";

interface RadioButtonProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onChange: ((event: React.ChangeEvent<{}>, checked: boolean) => void) | undefined
}

const RadioButton = ({
  name,
  value,
  label,
  checked,
  onChange,
}: RadioButtonProps) => {
  return (
    <FormControlLabel
      value={value}
      control={<Radio color="primary" />}
      label={label}
      labelPlacement="end"
      checked={checked}
      onChange={onChange}
      name={name}
    />
  );
};

export default RadioButton;

// 2min