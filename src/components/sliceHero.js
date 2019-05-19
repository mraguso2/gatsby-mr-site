import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

import ellipseBackground from '../images/ellipse-bkgd.svg';
import pieSlicedM from '../images/Pie-Sliced-M.svg';
import pieSlicedW from '../images/Pie-Sliced-W.svg';
import { above, below } from '../utilities/breakpoints';

// CSS Helper
const fixedMiddle = css`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
`;

const HeroStyled = styled.div`
  text-align: center;
  font-size: 40px;
  padding: 25px;
  margin: 15px auto;
  ${above.small_1`
    font-size: 50px;
    margin: 40px auto;
  `}
  ${below.small_0`
    font-size: 35px;
  `}
`;

const ImgStyled = styled.img`
  ${fixedMiddle};
  height: 160px;
  ${above.small_1`
    height: 210px;
  `}
`;

const PieContainer = styled.div`
  position: relative;
  display: inline-block;
  & img {
    ${above.small_1`
      width: 25px;
    `}
  }
`;

const moveSliceM = keyframes`
  0% {
    opacity: 0; transform: translate3d(0, 0, 0) rotate(0deg);
  }
  10% {
    opacity: 1;
  }
  100% {
    opacity: 1; transform: translate3d(10px, -25px, 0) rotate(20deg);
  }
`;

const moveSliceW = keyframes`
  0% {
    opacity: 0; transform: translate3d(0, 0, 0) rotate(10deg);
  }
  10% {
    opacity: 1;
  }
  100% {
    opacity: 1; transform: translate3d(-10px, 20px, 0) rotate(40deg);
  }
`;

const PieImage = styled.img`
  ${fixedMiddle};
  bottom: 0;
  opacity: 0;
  transition: all 1s;
  top: ${props => (props.letter === 'M' ? '0' : 'inherit')};
  animation: ${props => (props.letter === 'M' ? moveSliceM : moveSliceW)} 1s linear 1s 1 forwards;
`;

const EllipseBackground = () => <ImgStyled src={ellipseBackground} alt="Background Image" />;

const handlePieClick = e => {
  const pieContainer = e.currentTarget;
  const slice = pieContainer.querySelector('img');
  const seconds = slice.cloneNode(true);
  pieContainer.replaceChild(seconds, slice);
};

const LetterPieSlice = ({ letter }) => (
  <PieContainer onClick={e => handlePieClick(e)}>
    <PieImage letter={letter} src={letter === 'M' ? pieSlicedM : pieSlicedW} alt="Slice of Pie" />
    {letter}
  </PieContainer>
);

const SliceHero = () => (
  <div>
    <EllipseBackground />
    <HeroStyled>
      Welcome to <LetterPieSlice letter="M" />y <br />
      Slice of the <br />
      <LetterPieSlice letter="W" />
      eb
    </HeroStyled>
  </div>
);

LetterPieSlice.propTypes = {
  letter: PropTypes.string.isRequired
};

export default SliceHero;
