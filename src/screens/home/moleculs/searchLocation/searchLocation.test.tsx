import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {SearchLocation} from '.';

describe('SearchLocation', () => {
  test('renders correctly', () => {
    const onPressButtonSearchMock = jest.fn();

    const {getByTestId, getByPlaceholderText, getByLabelText} = render(
      <SearchLocation onPressButtonSearch={onPressButtonSearchMock} />,
    );

    const locationInput = getByTestId('Location-TestId');
    const placeholderText = getByPlaceholderText('Search Location');
    const labelText = getByLabelText('Location');

    expect(locationInput).toBeTruthy();
    expect(placeholderText).toBeTruthy();
    expect(labelText).toBeTruthy();
  });

  test('handles button press', () => {
    const onPressButtonSearchMock = jest.fn();

    const {getByTestId} = render(
      <SearchLocation onPressButtonSearch={onPressButtonSearchMock} />,
    );

    const locationInput = getByTestId('Location-TestId');
    const button = getByTestId('Enter');

    fireEvent.changeText(locationInput, 'New York');
    fireEvent.press(button);

    expect(onPressButtonSearchMock).toHaveBeenCalledWith('New York');
  });
});
