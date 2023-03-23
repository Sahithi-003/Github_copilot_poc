import React from 'react';
import IconWithButton from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Molecules/IconWithButton',
  component: IconWithButton,
} as ComponentMeta<typeof IconWithButton>;
const Template: ComponentStory<typeof IconWithButton> = (args) => (
    <IconWithButton {...args} />
  );

export const iconWithButton = Template.bind({});
iconWithButton.args = {
    icon: 'Add.svg',
    text: 'Add Card',
}
