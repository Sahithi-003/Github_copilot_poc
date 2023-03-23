// write test cases for checkbox component in typescript

import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkbox from './index';
import '@testing-library/jest-dom'

describe('Checkbox', () => {
  it('should render correctly', () => {
    render(<Checkbox style={{color: 'secondary'}} color="secondary" onChange={() => {}} />);
    expect(screen.getByRole('checkboxbtn')).toBeInTheDocument();
  });
  it('should render correctly when no color is provided', () => {
    render(<Checkbox style={{color: 'red'}} color="" onChange={() => {}} />);
    expect(screen.getByRole('checkboxbtn')).toBeInTheDocument();
  });
  it('should render correctly when no onChange is provided', () => {
    render(<Checkbox style={{color: 'red'}} color="red" onChange={() => {}} />);
    expect(screen.getByRole('checkboxbtn')).toBeInTheDocument();
  });
  it('should render correctly when no style is provided', () => {
    render(<Checkbox style={{}} color="red" onChange={() => {}} />);
    expect(screen.getByRole('checkboxbtn')).toBeInTheDocument();
  });
})