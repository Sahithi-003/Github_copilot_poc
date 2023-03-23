// write a code for image component in react typescript

import React from 'react';
import {BASE_URL} from '../../../constants/constants'

interface IconProps {
  src: string;
  alt: string;
  width: string;
  height: string;
}

const Icon  = (props: IconProps) => {
    const {src, alt, width, height} = props;
  return (
      <img src={BASE_URL+src} alt={alt} width={width} height={height} />
  );
};

export default Icon;