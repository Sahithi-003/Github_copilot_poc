// Path: Github_copilot_poc/frontend/src/components/atoms/RadioButton/RadioButton.stories.tsx
// create atom Radiobutton from mui along with its story and unit testcase

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioButton from '.';

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'RadioButton',
  value: 'RadioButton',
  label: 'RadioButton',
  checked: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: () => {},
};
