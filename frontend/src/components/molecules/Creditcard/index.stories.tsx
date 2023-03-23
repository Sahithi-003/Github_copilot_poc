import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CreditCard from './index';

export default {
  title: 'Molecules/CreditCard',
  Component: CreditCard,
} as ComponentMeta<typeof CreditCard>;

const Template: ComponentStory<typeof CreditCard> = (args) => (
  <CreditCard {...args} />
);
export const creditcard = Template.bind({});
creditcard.args = {
  cardHolder: 'Yessie',
  cardNumber: '1244 1234 1345 3255',
  expiry: '02/25',
};
