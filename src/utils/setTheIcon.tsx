import React from 'react';

import {IconCloudy} from '../assets/svg/cloudy';
import {RainyIcon} from '../assets/svg/rainy';
import {Sunny} from '../assets/svg/sunny';

export const setIcons = (
  weather: string,
  width?: number,
  height?: number,
  color?: string,
) => {
  switch (weather) {
    case 'Clouds':
      return <IconCloudy width={width} height={height} color={color} />;
    case 'Rain':
      return <RainyIcon width={width} height={height} color={color} />;
    case 'Rain':
      return <RainyIcon width={width} height={height} color={color} />;
    case 'Clear':
      return <Sunny width={width} height={height} color={color} />;
  }
};
