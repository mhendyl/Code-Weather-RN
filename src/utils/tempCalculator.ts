export const tempCalculator = (kelvin: number, result: string) => {
  switch (result) {
    case 'kelvin':
      return kelvin.toString();
    case 'celsius':
      return (kelvin - 273.15).toFixed(2).toString();
    case 'fahrenheit':
      return ((kelvin - 273.15) * (9 / 5) + 32).toFixed(2).toString();
  }
};
