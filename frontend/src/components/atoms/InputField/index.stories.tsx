// write story to the text field component in react typescript

import React from 'react';
import { ComponentStory } from '@storybook/react'
import InputField from './index';

export default {
  title: 'atoms/InputField',
  component: InputField,
};

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Name',
  name: 'name',
  value: 'John',
  onChange: () => {},
};

export const Error = Template.bind({});
Error.args = {
  label: 'Name',
  name: 'name',
  value: '',
  onChange: () => {},
};
