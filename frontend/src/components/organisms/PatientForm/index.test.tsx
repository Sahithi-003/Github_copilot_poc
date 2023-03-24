import { fireEvent, render, screen } from '@testing-library/react';
import AddPatientForm from '.';
import React from 'react';

test('Patient Form CheckBox should render and fireEvent', async() => {
  render(<AddPatientForm />);
  const formCheckBoxElement = screen.getByRole('checkbox');

  fireEvent.click(formCheckBoxElement);
});

test('Patient Form CheckBox should render and fireEvent', async() => {
  render(<AddPatientForm />);
  const formCheckBoxElement = screen.getByRole('checkbox');

  fireEvent.click(formCheckBoxElement);
});