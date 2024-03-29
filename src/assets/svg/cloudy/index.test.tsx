import React from 'react';
import {render} from '@testing-library/react-native';
import {IconCloudy} from '.'; // Import your IconCloudy component

describe('IconCloudy', () => {
  test('renders correctly', () => {
    const {getByTestId} = render(<IconCloudy />);
    const svgElement = getByTestId('IconCloudy');
    expect(svgElement).toBeTruthy();
  });
});
