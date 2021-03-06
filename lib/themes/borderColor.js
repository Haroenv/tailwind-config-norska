import { _ } from 'golgoth';
import colorsAsRGB from '../helpers/colorsAsRGB';

export default _.transform(
  colorsAsRGB,
  (result, colorValue, colorName) => {
    const rgbColorValue = colorValue.raw
      ? colorValue.raw
      : `rgba(${colorValue.red}, ${colorValue.green}, ${colorValue.blue}, var(--border-opacity, 1))`;
    result[colorName] = rgbColorValue;
  },
  {}
);
