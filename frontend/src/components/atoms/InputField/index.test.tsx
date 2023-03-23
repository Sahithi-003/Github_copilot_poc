// write test case to text field in react typescript

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputField from './index';

test('render text field', () => {
  render(<InputField label="Name" name="name" value="John" onChange={() => {}} />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

test('render text field with name', () => {
  render(<InputField label="Name" name="name" value="John" onChange={() => {}} />);
  expect(screen.getByDisplayValue('John')).toBeInTheDocument();
});

test('render text field with role', () => {
  render(<InputField label="Name" name="name" value="John" onChange={() => {}} />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});
