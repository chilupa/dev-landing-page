import React from 'react';
import { render, act, waitFor, fireEvent } from '@testing-library/react';
import ColorPalettes from '../ColorPalettes';

describe('ColorPalettes', () => {
  it('should render ColorPalettes component', () => {
    const props = {
      setOpenToast: jest.fn(),
      handlePaletteChange: jest.fn(),
    };
    const { getByTestId } = render(<ColorPalettes {...props} />);
    expect(getByTestId('color-palette')).toBeInTheDocument();
  });

  it('should be able to select the theme', () => {
    const props = {
      setOpenToast: jest.fn(),
      handlePaletteChange: jest.fn(),
    };
    const { queryAllByTestId, getByText } = render(
      <ColorPalettes {...props} />,
    );
    const selectedTheme = queryAllByTestId('theme');
    act(() => {
      fireEvent.click(selectedTheme[0]);
    });
    waitFor(() => {
      expect(props.handlePaletteChange).toHaveBeenCalledTimes(1);
      expect(props.setOpenToast).toHaveBeenCalledTimes(1);
      expect(getByText('Theme changed!')).toBeInTheDocument();
    });
  });
});
