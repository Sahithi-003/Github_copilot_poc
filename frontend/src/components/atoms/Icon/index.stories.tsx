// write a story for Icon component in typescript

import React from 'react';
import { ComponentStory } from '@storybook/react'
import Icon from './index';

export default {
  title: 'Icon',
  component: Icon,
};

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'PayPal.svg',
  alt: 'placeholder',
  width: '100px',
  height: '100px'
};

export const ImageWithNoAlt = Template.bind({});
ImageWithNoAlt.args = {
  src: 'PayPal.svg',
  alt: '',
  width: '100px',
  height: '100px'
};

export const ImageWithNoWidth = Template.bind({});
ImageWithNoWidth.args = {
  src: 'PayPal.svg',
  alt: 'placeholder',
  width: '',
  height: '100px'
};

export const ImageWithNoHeight = Template.bind({});
ImageWithNoHeight.args = {
  src: 'PayPal.svg',
  alt: 'placeholder',
  width: '100px',
  height: ''
};

export const ImageWithNoWidthAndHeight = Template.bind({});
ImageWithNoWidthAndHeight.args = {
  src: 'PayPal.svg',
  alt: 'placeholder',
  width: '',
  height: ''
};

export const ImageWithNoSrc = Template.bind({});
ImageWithNoSrc.args = {
  src: '',
  alt: 'placeholder',
  width: '100px',
  height: '100px'
};

export const ImageWithNoSrcAndNoAlt = Template.bind({});
ImageWithNoSrcAndNoAlt.args = {
  src: '',
  alt: '',
  width: '100px',
  height: '100px'
};

export const ImageWithNoSrcAndNoWidth = Template.bind({});
ImageWithNoSrcAndNoWidth.args = {
  src: '',
  alt: 'placeholder',
  width: '',
  height: '100px'
};

export const ImageWithNoSrcAndNoHeight = Template.bind({});