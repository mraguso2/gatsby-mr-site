import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

import ellipseBackground from '../images/ellipse-bkgd2.svg';
// import pieSlicedM from '../images/Pie-Sliced-M.svg';
// import pieSlicedW from '../images/Pie-Sliced-W.svg';
import pieSlicedM from '../images/pizza_M.svg';
import pieSlicedW from '../images/pizza_W.svg';
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

// const enticePie = keyframes`
//   {
//     0% {
//       transform: scale(.33);
//     }
//     80%, 100% {
//       opacity: 0;
//     }
//   }
// `;
// ::before {
//   content: 'adf';
//   position: relative;
//   display: block;
//   width: 300%;
//   height: 300%;
//   border-radius: 45px;
//   background-color: #01a4e9;
//   animation: ${enticePie} 4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
// }

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
    width: 40px;
  }
  95% {
    opacity: 1; transform: translate3d(10px, -35px, 0) rotate(25deg);
    width: 40px;
  }
  100% {
    /* opacity: 1; transform: translate3d(10px, -28px, 0) rotate(20deg); */
    opacity: 1; transform: translate3d(10px, -35px, 0) rotate(25deg);
    width: 40px;
  }
`;

const moveSliceW = keyframes`
  0% {
    opacity: 0; transform: translate3d(0, 0, 0) rotate(10deg);
  }
  10% {
    opacity: 1;
    width: 40px;
  }
  95% {
    opacity: 1; transform: translate3d(-15px, 40px, 0) rotate(35deg);
    width: 40px;
  }
  100% {
    /* opacity: 1; transform: translate3d(-10px, 30px, 0) rotate(40deg); */
    opacity: 1; transform: translate3d(-15px, 40px, 0) rotate(35deg);
    width: 40px;
  }
`;

const PieImage = styled.img`
  ${fixedMiddle};
  bottom: 0;
  opacity: 0;
  transform: translate3d(0, 0, 0);
  transition: all 1.5s;
  will-change: transform, opacity, width;
  top: ${props => (props.letter === 'M' ? '0' : 'inherit')};
  animation: ${props => (props.letter === 'M' ? moveSliceM : moveSliceW)} 0.8s linear 0.9s 1
    forwards;
`;

const TooMuchPie = styled.h3`
  padding: 15px 15px 10px 10px;
  background: #f2ecfe;
  color: #5628b1;
  background: #fee793;
  color: #655006;
  font-weight: 400;
  border-radius: 10px;
  box-shadow: 0 3px 6px hsla(0, 0%, 0%, 0.15), 0 2px 4px hsla(0, 0%, 0%, 0.12);
  /* box-shadow: 0 15px 25px hsla(0, 0%, 0%, 0.15), 0 5px 10px hsla(0, 0%, 0%, 0.5); */
  width: 100%;
  opacity: ${props => (props.showMe ? 1 : 0)};
  transition: all 0.7s;
  text-align: center;
  margin: auto;
  max-width: 400px;
  position: relative;
  margin-top: 3rem;
  .close {
    position: absolute;
    top: 0px;
    right: 0;
    color: #c10d0d;
    margin-top: 0;
    /* font-size: 13px; */
    font-size: 25px;
    padding: 0.25rem 0.75rem 0.5rem;
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
    <PieImage letter={letter} src={letter === 'M' ? pieSlicedM : pieSlicedW} alt="Slice of Pie" />
    <span>{letter}</span>
  </PieContainer>
);

const SliceHero = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <EllipseBackground /> */}
      <HeroStyled>
        Welcome to <LetterPieSlice letter="M" counter={{ count, setCount }} />y <br />
        Slice of the <br />
        <LetterPieSlice letter="W" counter={{ count, setCount }} />
        eb
      </HeroStyled>
      <div>
        <TooMuchPie showMe={count >= 8}>
          1 Whole Pie Down!
          <button type="button" onClick={() => setCount(0)} className="close">
            {/* close  */}
            <span style={{ color: '#c10d0d' }}>&#10006;</span>
          </button>
        </TooMuchPie>
      </div>
    </div>
  );
};

LetterPieSlice.propTypes = {
  letter: PropTypes.string.isRequired,
  counter: PropTypes.object.isRequired
};

export default SliceHero;
