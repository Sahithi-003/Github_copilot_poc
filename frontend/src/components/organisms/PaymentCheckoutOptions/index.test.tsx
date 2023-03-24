import { screen, render } from '@testing-library/react';
import React from 'react';
import CheckoutPaymentOptions from '.';

test('should render payment card and options', async() => {
  render(<CheckoutPaymentOptions />);
  const creditcard = screen.getByTestId('creditcard');

  const cardHolder = screen.getByText('Yessie');
  const cardExpiry = screen.getByText('02/25');
  const cardNumber = screen.getByText('1244 1234 1345 3255');

  expect(screen.getByTestId('paymentoptions')).toBeTruthy();
  expect(screen.getByText('Pay Pal')).toBeTruthy();
  expect(screen.getByText('Google Pay')).toBeTruthy();
  expect(screen.getByText('Net Banking')).toBeTruthy();

  expect(creditcard).toBeTruthy();
  expect(cardHolder).toBeTruthy();
  expect(cardExpiry).toBeTruthy();
  expect(cardNumber).toBeTruthy();
});
