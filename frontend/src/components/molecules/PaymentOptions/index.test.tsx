import * as React from 'react';
import { render, screen } from '@testing-library/react';
import PaymentOptions from '.';
import { Svg } from '../../../constants/constants';

test('should render payment options', () => {
  render(
    <PaymentOptions
      options={[
        {
          icon: Svg.PayPal,
          value: 'paypal',
          label: 'Pay Pal',
        },
        {
          icon: Svg.GooglePay,
          value: 'googlepay',
          label: 'Google Pay',
        },
        {
          icon: Svg.NetBanking,
          value: 'netbanking',
          label: 'Net Banking',
        },
      ]}
    />,
  );

  expect(screen.getByTestId('paymentoptions')).toBeTruthy();
  expect(screen.getByText('Pay Pal')).toBeTruthy();
  expect(screen.getByText('Google Pay')).toBeTruthy();
  expect(screen.getByText('Net Banking')).toBeTruthy();
});
