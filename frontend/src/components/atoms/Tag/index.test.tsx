
import React from 'react';
import { render } from '@testing-library/react';
import Tag from './index';

describe('Tag', () => {
  it('should render without crashing', () => {
    const { container } = render(<Tag label="Default" color="default" />);
    expect(container).toBeTruthy();
  });
});