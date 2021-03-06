import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Image from './image';
import { above, below } from '../utilities/breakpoints';

const ImageContainer = styled.div`
  width: 100%;
  max-width: 130px;
  ${below.small_0`
    max-width: 110px;
  `}
  ${above.small_1`
    max-width: 150px;
  `}
  ${above.med_1`
    max-width: 190px;
  `}
  & p {
    text-align: center;
    margin-top: 5px;
    font-size: 0.9rem;
  }
`;

const MyFace = ({ outlineColor, noText, style }) => (
  <ImageContainer>
    <Image style={{ borderRadius: '50%', border: `3px solid ${outlineColor}`, ...style }} />
    {noText ? '' : <p>^ That's Me</p>}
  </ImageContainer>
);

MyFace.propTypes = {
  outlineColor: PropTypes.string,
  noText: PropTypes.bool
};

MyFace.defaultProps = {
  outlineColor: '#fff',
  noText: false
};

export default MyFace;
