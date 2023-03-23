// write a story for checkbox component in typescript

import React from 'react';
import { ComponentStory } from '@storybook/react'
import Checkbox from './index';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
};

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  style: {color: 'secondary'},
  color: 'secondary',
  onChange: () => {},
};

export const CheckboxWithNoColor = Template.bind({});
CheckboxWithNoColor.args = {
  style: {color: 'red'},
  color: '',
  onChange: () => {},
};

export const CheckboxWithNoStyle = Template.bind({});
CheckboxWithNoStyle.args = {
  style: {},
  color: 'red',
  onChange: () => {},
};

export const CheckboxWithNoOnChange = Template.bind({});
CheckboxWithNoOnChange.args = {
  style: {color: 'red'},
  color: 'red',
  onChange: () => {},
};