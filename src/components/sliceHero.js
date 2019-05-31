import React, { useState, useEffect } from 'react';
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
  margin: 25px auto;
  ${above.small_1`
    font-size: 50px;
    margin: 40px auto 60px;
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
  95% {
    opacity: 1; transform: translate3d(10px, -25px, 0) rotate(20deg);
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
  95% {
    opacity: 1; transform: translate3d(-10px, 20px, 0) rotate(40deg);
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
  animation: ${props => (props.letter === 'M' ? moveSliceM : moveSliceW)} 1s linear 0.7s 1 forwards;
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
    {letter}
  </PieContainer>
);

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
        <p className="hungry">Mmm, Blueberry Pie!</p>
        {count >= 5 ? <h2>Slow Down there!</h2> : ''}
      </div>
    </div>
  );
};

// class SliceHero extends React.Component {
//   state = {
//     count: 0
//   };

//   handleClick = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <EllipseBackground />
//         <HeroStyled>
//           Welcome to <LetterPieSlice letter="M" counter={this.handleClick} />y <br />
//           Slice of the <br />
//           <LetterPieSlice letter="W" />
//           eb
//         </HeroStyled>
//         <div>
//           <p className="hungry">Mmm, Blueberry Pie! count= {this.state.count}</p>
//         </div>
//       </div>
//     );
//   }
// }

LetterPieSlice.propTypes = {
  letter: PropTypes.string.isRequired
};

export default SliceHero;
