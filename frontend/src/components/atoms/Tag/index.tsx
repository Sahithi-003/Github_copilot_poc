// genearate code for mui chip long with story and unit testcase for the same
import React, { MouseEventHandler } from 'react';
import { Chip } from '@material-ui/core';

export interface TagProps {
  label: string;
  color: 'primary' | 'secondary' | 'default' | 'error' | 'info' | 'success' | 'warning';
  style?: React.CSSProperties;
  onclick?: MouseEventHandler<HTMLDivElement>;
}

export const Tag: React.FC<TagProps> = ({ label, color, style, onclick }) => {
  return <Chip label={label} color='primary' style={style} onClick={onclick}/>;
};

export default Tag;

// Time taken: 5min
