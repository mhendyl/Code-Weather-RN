import React from 'react';
import {render} from '@testing-library/react-native';
import {Sunny} from '.'; // Import your IconCloudy component

describe('IconCloudy', () => {
  test('renders correctly', () => {
    const {getByTestId} = render(<Sunny />);
    const svgElement = getByTestId('SunnyIcon');
    expect(svgElement).toBeTruthy();
  });
});
