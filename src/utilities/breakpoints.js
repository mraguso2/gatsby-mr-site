import { css } from 'styled-components';

const size = {
  small_0: 349,
  small_1: 500,
  med_0: 625,
  med_1: 750,
  med_2: 960,
  large: 1140
};

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
