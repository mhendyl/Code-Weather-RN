import React from 'react';
import {render} from '@testing-library/react-native';
import {RainyIcon} from '.'; // Import your IconCloudy component

describe('IconCloudy', () => {
  test('renders correctly', () => {
    const {getByTestId} = render(<RainyIcon />);
    const svgElement = getByTestId('RainyIconId');
    expect(svgElement).toBeTruthy();
  });
});
