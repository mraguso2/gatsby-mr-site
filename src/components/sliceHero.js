import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

import ellipseBackground from '../images/ellipse-bkgd2.svg';
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
  font-size: 45px;
  padding: 20px 5px;
  margin: 25px auto;
  ${below.small_0`
    font-size: 35px;
    padding-top: 25px;
  `}
  ${above.small_1`
    font-size: 50px;
    margin: 40px auto 60px;
    padding-top: 25px
  `}
`;

const ImgStyled = styled.img`
  ${fixedMiddle};
  height: 160px;
  z-index: -1;
  ${above.small_1`
    height: 210px;
  `}
`;

const PieContainer = styled.div`
  position: relative;
  display: inline-block;
  & img {
    width: 25px;
    ${above.small_1`
      width: 30px;
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
  95% {
    opacity: 1; transform: translate3d(10px, -28px, 0) rotate(20deg);
  }
  100% {
    opacity: 1; transform: translate3d(10px, -28px, 0) rotate(20deg);
  }
`;

const moveSliceW = keyframes`
  0% {
    opacity: 0; transform: translate3d(0, 0, 0) rotate(10deg);
  }
  10% {
    opacity: 1;
  }
  95% {
    opacity: 1; transform: translate3d(-10px, 28px, 0) rotate(40deg);
  }
  100% {
    opacity: 1; transform: translate3d(-10px, 28px, 0) rotate(40deg);
  }
`;

const moveBlueberryText = keyframes`
  0% {
    transform: rotate(0deg)
  }
  25% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const PieImage = styled.img`
  ${fixedMiddle};
  bottom: 0;
  /* opacity: 0;
  transform: translate3d(0, 0, 0); */
  opacity: 0;
  transform: translate3d(0, 0, 0);
  /* transition: all 1s; */
  will-change: transform, opacity;
  top: ${props => (props.letter === 'M' ? '0' : 'inherit')};
  animation: ${props => (props.letter === 'M' ? moveSliceM : moveSliceW)} 1s linear 0.7s 1 forwards;
  /* &.sliceOut {
    opacity: 1;
    transform: ${props =>
      props.letter === 'M'
        ? 'translate3d(10px, -28px, 0) rotate(20deg)'
        : 'translate3d(-10px, 28px, 0) rotate(40deg)'};
  } */
`;

const BlueberryTxt = styled.p`
  text-align: center;
  transition: all 0.7s;
  opacity: ${props => (props.sliceClicked ? 0 : 1)};
  margin-bottom: 0;
  margin-top: 30px;
  animation: ${moveBlueberryText} 3s linear 4s infinite;
`;

const TooMuchPie = styled.h3`
  padding: 15px 15px 10px 10px;
  background: #f2ecfe;
  color: #5628b1;
  font-weight: 400;
  border-radius: 10px;
  box-shadow: 0 3px 6px hsla(0, 0%, 0%, 0.15), 0 2px 4px hsla(0, 0%, 0%, 0.12);
  width: 100%;
  opacity: ${props => (props.showMe ? 1 : 0)};
  transition: all 0.7s;
  text-align: center;
  margin: auto;
  max-width: 400px;
  position: relative;
  #close {
    position: absolute;
    top: 0px;
    right: 0;
    color: #c10d0d;
    margin-top: 0;
    font-size: 13px;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: none;
    border: 0;
  }
`;

const EllipseBackground = () => <ImgStyled src={ellipseBackground} alt="Background Image" />;

const handlePieClick = e => {
  const pieContainer = e.currentTarget;
  const slice = pieContainer.querySelector('img');
  const seconds = slice.cloneNode(true);
  pieContainer.replaceChild(seconds, slice);
};

// TODO add validation and make better

const LetterPieSlice = ({ letter, counter = {} }) => (
  <PieContainer
    onClick={e => {
      counter.setCount(counter.count + 1);
      handlePieClick(e);
    }}
  >
    <PieImage
      className="sliceOut"
      letter={letter}
      src={letter === 'M' ? pieSlicedM : pieSlicedW}
      alt="Slice of Pie"
    />
    {letter}
  </PieContainer>
);

// const handlePieClick = e => {
//   const pieContainer = e.currentTarget;
//   const slice = pieContainer.querySelector('img');
//   const seconds = slice.cloneNode(true);
//   pieContainer.replaceChild(seconds, slice);
// };

// const LetterPieSlice = ({ letter, counter = {} }) => (
//   <PieContainer
//     onClick={e => {
//       counter.setCount(counter.count + 1);
//       handlePieClick(e);
//     }}
//   >
//     <PieImage
//       letter={letter}
//       src={letter === 'M' ? pieSlicedM : pieSlicedW}
//       alt="Slice of Pie"
//     />
//     {letter}
//   </PieContainer>
// );

const SliceHero = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <EllipseBackground />
      <HeroStyled>
        Welcome to <LetterPieSlice letter="M" counter={{ count, setCount }} />y <br />
        Slice of the <br />
        <LetterPieSlice letter="W" counter={{ count, setCount }} />
        eb
      </HeroStyled>
      <div>
        <BlueberryTxt sliceClicked={count >= 1}>Mmm, Blueberry Pie!</BlueberryTxt>
        <TooMuchPie showMe={count >= 5}>
          Slow down, you don't want a belly ache
          <button type="button" onClick={() => setCount(0)} id="close">
            close &#10006;
          </button>
        </TooMuchPie>
      </div>
    </div>
  );
};

LetterPieSlice.propTypes = {
  letter: PropTypes.string.isRequired
};

export default SliceHero;
