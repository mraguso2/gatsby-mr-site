import React from 'react';
import styled, { keyframes } from 'styled-components';

import ellipseBackground from '../images/ellipse-bkgd.svg';
import pieSliced from '../images/Pie-Sliced.svg';

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
`;
// height: 160px;

const PieContainer = styled.div`
  position: relative;
  display: inline-block;
`;

// const rotateAndTranslate = keyframes`
//   0% {
//     opacity: 0; transform: translate3d(0, 0, 0) rotate(0deg);
//   }
//   10% {
//     opacity: 1;
//   }
//   50% {
//     transform: translate3d(10px, -25px, 0) rotate(20deg);
//   }
//   90% {
//     opacity: 1;
//   }
//   100% {
//     opacity: 0; transform: translate3d(0, 0, 0) rotate(0deg);
//   }
// `;

const rotateAndTranslate = keyframes`
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

const PieImage = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 0;
  top: 0;

  transition: all 1s;
  animation: ${rotateAndTranslate} 1s linear 1 forwards;
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

const LetterM = () => (
  <PieContainer>
    <PieImage src={pieSliced} alt="Slice of Pie" />M
  </PieContainer>
);

const SliceHero = () => (
  <div>
    <EllipseBackground />
    <HeroStyled>
      Welcome to <LetterM />y <br />
      Slice of the <br />
      <span>W</span>eb
    </HeroStyled>
  </div>
);

export default SliceHero;
