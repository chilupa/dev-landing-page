import React from 'react';
import { render, act, waitFor, fireEvent } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('should render Header component', () => {
    const props = {
      handlePaletteChange: jest.fn(),
    };
    const { getByTestId } = render(<Header {...props} />);
    const toggleButton = getByTestId('toggle-button');

    expect(getByTestId('header')).toBeInTheDocument();

    act(() => {
      fireEvent.click(toggleButton);
    });

    waitFor(() => {
      expect(getByTestId('close-icon')).toBeInTheDocument();
      expect(getByTestId('theme')).toBeInTheDocument();
    });

    act(() => {
      fireEvent.click(toggleButton);
    });

    waitFor(() => {
      expect(getByTestId('color-palette-icon')).toBeInTheDocument();
    });
  });
});
