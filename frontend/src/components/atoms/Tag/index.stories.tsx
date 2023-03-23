import React from 'react';
import { Meta, Story } from '@storybook/react';
import Tag, { TagProps } from './index';

export default {
  title: 'atoms/Tag',
  component: Tag,
} as Meta;
const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  color: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  color: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Success',
  color: 'success',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  color: 'error',
};

export const Info = Template.bind({});
Info.args = {
  label: 'Info',
  color: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Warning',
  color: 'warning',
};
