import React, { useState } from 'react';
import styled from 'styled-components';

import { FullWidthContainer, SectionTitle, MyEmail } from '../styles/section';
import { ListenButton, TrimmedTakeAChance } from './listenTakeAChance';

const ContactContainer = styled(FullWidthContainer)`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: ${props => (props.showVid === 'Yes' ? '170px' : '30px')};
  transition: padding 1s;
  z-index: 2;
  background-color: hsl(212, 100%, 97%);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23a3bffa' fill-opacity='0.61' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  margin-bottom: 0px;
  box-shadow: inset 0px 2px 5px rgb(205, 224, 245);
  border-bottom: 5px solid #cde0f5;
`;

const ContactGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: white;
  align-items: center;
  width: 250px;
  ::before {
    content: '';
    position: absolute;
    background: white;
    top: 0;
    left: -18px;
    bottom: 0;
    width: 30px;
    transform: skew(5deg);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  ::after {
    content: '';
    position: absolute;
    background: white;
    top: 0;
    right: -18px;
    bottom: 0;
    width: 30px;
    transform: skew(-5deg);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const ContactTitle = styled(SectionTitle)`
  font-size: 1.25rem;
  margin: 0.9rem auto 0;
`;

const ContactInfo = styled.div`
  p {
    text-align: center;
    line-height: 1.5;
    span {
      font-size: 0.9rem;
      font-style: italic;
    }
  }
`;

const ChanceVideoBlock = styled.div`
  position: absolute;
  bottom: ${props => (props.showVid === 'Yes' ? '-155px' : '0px')};
  display: flex;
  flex-direction: column;
  transition: all 1s;
  z-index: -1;
  color: #102a42;
  button.close {
    opacity: ${props => (props.showVid === 'Yes' ? 1 : 0)};
    background: #e8f1fa;
    color: #c10d0d;
    text-align: center;
    font-size: 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 0;
    position: relative;
    align-self: flex-end;
    border-radius: 10px;
    right: 15px;
    cursor: pointer;
  }
`;

const ContactBlock = () => {
  const [showVid, toggleVid] = useState('No');

  return (
    <ContactContainer showVid={showVid} id="contact">
      <ContactGroup>
        <ContactTitle>CONTACT ME</ContactTitle>
        <ContactInfo>
          <p>
            Feel free to reach out! <br />
            <span>(I like jokes and fun facts)</span>
          </p>
          <MyEmail href="mailto:mr.mraguso@gmail.com">mr.mraguso@gmail.com</MyEmail>
          <p>
            Looking to hire? <br />
            <span>Take a Chance on Me...</span>
            <br />
            <ListenButton onClick={() => toggleVid('Yes')} type="button">
              Listen
            </ListenButton>
          </p>
        </ContactInfo>
        {/* <ListenTakeAChance toggleVid={toggleVid} showVid={showVid === 0 ? 'No' : 'Yes'} /> */}
        <ChanceVideoBlock showVid={showVid}>
          <button type="button" onClick={() => toggleVid('No')} className="close">
            Close <span style={{ color: 'inherit' }}>&#10006;</span>
          </button>
          {showVid === 'Yes' ? <TrimmedTakeAChance /> : ''}
        </ChanceVideoBlock>
      </ContactGroup>
    </ContactContainer>
  );
};

export default ContactBlock;
