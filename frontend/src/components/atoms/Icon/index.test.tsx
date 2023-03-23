// write test cases for Icon component in typescript

import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from './index';
import '@testing-library/jest-dom'

describe('Icon', () => {
  it('should render correctly', () => {
    render(<Icon src="PayPal.svg" alt="placeholder" width="100px" height="100px" />);
    expect(screen.getByAltText('placeholder')).toBeInTheDocument();
  });
  it('should render correctly when no alt is provided', () => {
    render(<Icon src="PayPal.svg" alt="" width="100px" height="100px" />);
    expect(screen.getByAltText('')).toBeInTheDocument();
  });
  it('should render correctly when no width is provided', () => {
    render(<Icon src="PayPal.svg" alt="placeholder" width="" height="100px" />);
    expect(screen.getByAltText('placeholder')).toBeInTheDocument();
  });
  it('should render correctly when no height is provided', () => {
    render(<Icon src="PayPal.svg" alt="placeholder" width="100px" height="" />);
    expect(screen.getByAltText('placeholder')).toBeInTheDocument();
  });
  it('should render correctly when no width and height is provided', () => {
    render(<Icon src="PayPal.svg" alt="placeholder" width="" height="" />);
    expect(screen.getByAltText('placeholder')).toBeInTheDocument();
  });
  it('should render correctly when no src is provided', () => {
    render(<Icon src="" alt="placeholder" width="100px" height="100px" />);
    expect(screen.getByAltText('placeholder')).toBeInTheDocument();
  });
})