import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SocialMedia from '../SocialMedia';

window.open = jest.fn();

describe('SocialMedia', () => {
  it('should render SocialMedia component', () => {
    const { getByTestId } = render(<SocialMedia />);
    expect(getByTestId('iconContainer')).toBeInTheDocument();
  });
  it('should open a new browser tab when social media icons are clicked', () => {
    const { getByTestId } = render(<SocialMedia />);
    const githubButton = getByTestId('github');

    fireEvent.click(githubButton);

    expect(window.open).toHaveBeenCalledTimes(1);
  });
});
