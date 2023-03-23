import React from 'react';
import { render } from '@testing-library/react';
import IconWithButton from '.';

test('renders ButtonWithIcon component', () => {
  render(<IconWithButton icon={'Add.svg'} text={'Add Card'} />);
});