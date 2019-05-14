import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import ellipseBackground from '../images/ellipse-bkgd.svg';
import pieSlicedM from '../images/Pie-Sliced-M.svg';
import pieSlicedW from '../images/Pie-Sliced-W.svg';

const HeroStyled = styled.div`
  text-align: center;
  font-size: 40px;
  padding: 25px;
`;

const ImgStyled = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  height: 160px;
`;

const PieContainer = styled.div`
  position: relative;
  display: inline-block;
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
  position: absolute;
  left: 0;
  right: 0;
  opacity: 0;
  margin: auto;
  bottom: 0;
  top: ${props => (props.letter === 'M' ? '0' : 'inherit')};
  transition: all 1s;
  animation: ${props => (props.letter === 'M' ? moveSliceM : moveSliceW)} 1s linear 1s 1 forwards;
`;

// const PieImage = styled(ImgStyled)`
//   bottom: 0;
//   top: 0;
//   opacity: 0;
//   transition: all 1s;
//   &.showPie {
//     opacity: 1;
//     transform: translate3d(10px, -25px, 0) rotate(20deg);
//   }
// `;

const EllipseBackground = () => <ImgStyled src={ellipseBackground} alt="Background Image" />;

const handlePieClick = e => {
  const pieContainer = e.currentTarget;
  const slice = pieContainer.querySelector('img');
  console.log(slice);
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
