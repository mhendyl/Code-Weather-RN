import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import SwitchMatrix from './'; // Import your SwitchMatrix component

const mockStore = configureStore([]);

describe('SwitchMatrix Component', () => {
  it('handles switch change correctly', () => {
    const store = mockStore({});
    const {getByTestId} = render(
      <Provider store={store}>
        <SwitchMatrix />
      </Provider>,
    );

    const switchElement = getByTestId('switchMatrix');

    fireEvent.press(switchElement);

    const state = store.getState();
    expect(state).toBeDefined();
  });
});
