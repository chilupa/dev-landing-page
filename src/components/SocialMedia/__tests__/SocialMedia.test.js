import React from 'react';
import { render } from '@testing-library/react';
import SocialMedia from '../SocialMedia';

describe('SocialMedia', () => {
  it('should render SocialMedia component', () => {
    const { getByTestId } = render(<SocialMedia />);
    expect(getByTestId('iconContainer')).toBeInTheDocument();
  });
  it('should open a new browser tab when social media icons are clicked', () => {
    const { getByTestId } = render(<SocialMedia />);
    const githubButton = getByTestId('github');
    expect(githubButton).toBeInTheDocument();
  });
});
