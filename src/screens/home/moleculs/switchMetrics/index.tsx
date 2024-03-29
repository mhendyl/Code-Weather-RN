import React, {useState} from 'react';
import {View} from 'react-native';
import {SwitchComponent} from '../../../../components/switch/switch';
import {useDispatch} from 'react-redux';
import {setMatrix} from '../../../../rtk/weather/weatherSlice';
import {TextComponent} from '../../../../components/text';
import styles from './style';

const SwitchMatrix = () => {
  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(false);
  const [type, setType] = useState('fahrenheit');
  const handleChange = (value: boolean) => {
    const isValue = value ? 'celsius' : 'fahrenheit';
    setType(isValue);
    setIsEnabled(value);
    dispatch(setMatrix(isValue));
  };

  return (
    <View style={styles.container}>
      <TextComponent
        label="Temperature"
        testId="textTemperature"
        styleContainerText={styles.styleText}
      />
      <TextComponent
        label={type}
        testId="typeTemperature"
        styleContainerText={styles.styleText}
      />
      <SwitchComponent
        testId="switchMatrix"
        label="switchUnitMatrix"
        onChange={handleChange}
        isEnabled={isEnabled}
      />
    </View>
  );
};
export default SwitchMatrix;
