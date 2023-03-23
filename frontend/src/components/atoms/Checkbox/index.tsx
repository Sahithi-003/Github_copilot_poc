// write a code for checkbox component in react typescript

import React from 'react';
import Checkbox from '@mui/material/Checkbox';

interface Props {
  style: React.CSSProperties;
  color?: string;
  onChange: () => void;
}

const CheckboxField= (props: Props) => {
  const {style, onChange} = props;
  return (
    <Checkbox
    role="checkboxbtn"
    sx={style}
    onClick={onChange}
    />
  );
};

export default CheckboxField;