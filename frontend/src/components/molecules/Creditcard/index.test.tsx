import * as React from 'react';
import { render, screen } from '@testing-library/react';
import CreditCard from '.';

test('should render credit card', () => {
  render(
    <CreditCard cardHolder={'sample'} cardNumber={'12345'} expiry={'07/2029'} />
  );

  const creditcard = screen.getByTestId('creditcard');

  const cardHolder = screen.getByText('sample');
  const cardExpiry = screen.getByText('07/2029');
  const cardNumber = screen.getByText('12345');

  expect(creditcard).toBeTruthy();
  expect(cardHolder).toBeTruthy();
  expect(cardExpiry).toBeTruthy();
  expect(cardNumber).toBeTruthy();
});
