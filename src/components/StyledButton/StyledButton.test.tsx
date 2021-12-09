import { render } from '@testing-library/react';
import React from 'react';
import { StyledButton } from './StyledButtonRaw';

describe('StyledButton', () => {
  test('renders the Styled Button component', () => {
    render(<StyledButton label="Hello world!" />);
  });
});
