import React from 'react';
import styled from 'styled-components';

import someTunes from '../audio/TakeAChanceOnMe-ABBA-Trimmed.mp3';
import playButton from '../images/play-outline.svg';

export const ListenButton = styled.button`
  border: none;
  background: ${props => props.background || '#f6f8fb'};
  /* color: #102a42; */
  color: #002a61;
  font-size: 0.85rem;
  border-radius: 10px;
  box-shadow: 0px 1px 2px hsla(0, 0%, 0%, 0.15);
  position: relative;
  padding: 5px 20px 5px 5px;
  width: 70px;
  margin-top: 5px;
  ::after {
    content: url(${playButton});
    width: 15px;
    position: absolute;
    right: 5px;
  }
`;

const ChanceSource = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  align-self: center;
  a {
    font-size: 0.7rem;
  }
`;

const TextSource = styled.p`
  font-size: 0.7rem;
`;

export const TrimmedTakeAChance = () => (
  <>
    <audio autoPlay controls controlsList="nodownload">
      <source src={someTunes} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    <ChanceSource>
      <TextSource>
        Artist: ABBA <br />
        Song: Take A Chance on Me <br />
        Source:{' '}
        <a
          href="https://www.youtube.com/watch?v=-crgQGdpZR0"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube Link
        </a>
      </TextSource>
    </ChanceSource>
  </>
);

// const ChanceVideoBlock = styled.div`
//   position: absolute;
//   bottom: ${props => (props.showVid === 'Yes' ? '-155px' : '0px')};
//   display: flex;
//   flex-direction: column;
//   transition: all 1s;
//   z-index: -1;
//   color: #102a42;
//   button.close {
//     opacity: ${props => (props.showVid === 'Yes' ? 1 : 0)};
//     background: #e8f1fa;
//     color: #c10d0d;
//     text-align: center;
//     font-size: 1rem;
//     -webkit-appearance: none;
//     -moz-appearance: none;
//     border: 0;
//     position: relative;
//     align-self: flex-end;
//     border-radius: 10px;
//     right: 15px;
//   }
// `;

// const ListenTakeAChance = props => (
//   <ChanceVideoBlock showVid={props.showVid === 0 ? 'No' : 'Yes'}>
//     <button type="button" onClick={() => props.toggleVid(0)} className="close">
//       Close <span style={{ color: 'inherit' }}>&#10006;</span>
//     </button>
//     {props.showVid === 'Yes' ? <TrimmedTakeAChance /> : ''}
//   </ChanceVideoBlock>
// );

// export default ListenTakeAChance;
