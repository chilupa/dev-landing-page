import React from 'react';
import { render } from '@testing-library/react';
import Bio from '../Bio';

describe('Bio', () => {
  it('should render Bio component', () => {
    const { getByText } = render(<Bio />);
    expect(getByText('Full Stack Developer')).toBeInTheDocument();
  });
});
