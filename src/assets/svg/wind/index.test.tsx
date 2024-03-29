import React from 'react';
import {render} from '@testing-library/react-native';
import {WindIcon} from '.'; // Import your IconCloudy component

describe('IconCloudy', () => {
  test('renders correctly', () => {
    const {getByTestId} = render(<WindIcon />);
    const svgElement = getByTestId('WindIconTID');
    expect(svgElement).toBeTruthy();
  });
});
