import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import PaymentCheckoutOptions from '.';

export default {
  title: 'Organisms/PaymentCheckoutOptions',
  Component: PaymentCheckoutOptions,
} as ComponentMeta<typeof PaymentCheckoutOptions>;

const Template: ComponentStory<typeof PaymentCheckoutOptions> = () => (
  <PaymentCheckoutOptions />
);
export const PaymentCheckoutOption = Template.bind({});
