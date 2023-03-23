// genearate code for mui chip long with story and unit testcase for the same
import React from 'react';
import { Chip } from '@material-ui/core';

export interface TagProps {
  label: string;
  color: 'primary' | 'secondary' | 'default' | 'error' | 'info' | 'success' | 'warning';
}

export const Tag: React.FC<TagProps> = ({ label, color }) => {
  return <Chip label={label} color='primary' />;
};

export default Tag;

// Time taken: 5min
