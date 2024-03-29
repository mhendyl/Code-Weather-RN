import React, {PropsWithChildren, useState} from 'react';
import {View} from 'react-native';
import {TextInputComponent} from '../../../../components/textInput';
import {ButtonComponent} from '../../../../components/button';
import styles from './style';

interface SearchLocationInterface {
  onPressButtonSearch: (value: string) => void;
}

export const SearchLocation = ({
  onPressButtonSearch,
}: PropsWithChildren<SearchLocationInterface>) => {
  const [location, setLocation] = useState('');

  const handleOnPressButton = () => {
    onPressButtonSearch(location);
  };

  return (
    <View style={styles.wrapper}>
      <TextInputComponent
        onChange={setLocation}
        value={location}
        testId="Location-TestId"
        label="Location"
        placeholder="Search Location"
        styleCustom={styles.customInputStyle}
      />
      <ButtonComponent
        label="Enter"
        styleCustom={styles.customButtonStyle}
        onPress={() => {
          handleOnPressButton();
        }}
      />
    </View>
  );
};
