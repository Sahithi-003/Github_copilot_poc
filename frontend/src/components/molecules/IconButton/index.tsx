//create code for button with icon using atom icon and typography that is present already and generate story and unit testcase for the same
import { Typography } from '@mui/material';
import React from 'react';
import Icon from '../../atoms/Icon';

export interface IconButtonProps {
  icon: string;
  text: string;
  onClick?: () => void;
}

 const IconWithButton = (props: IconButtonProps) => {
  const { icon, text, onClick } = props;
  return (
    <button className="icon-button" onClick={onClick}>
      <Icon src={icon} alt={text} width="24px" height="24px" />
      <Typography variant="button" className="icon-button-text">
        {text}
      </Typography>
    </button>
  );
};

export default IconWithButton;