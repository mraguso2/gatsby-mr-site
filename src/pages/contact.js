import React, { useState } from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BreadCrumbs from '../components/breadcrumbs';
import { MyEmail } from '../styles/section';
import { above, below } from '../utilities/breakpoints';
import contactPic from '../images/undraw-online-discussion.svg';
import { ListenButton, TrimmedTakeAChance } from '../components/listenTakeAChance';

const ContactTitle = styled.h1`
  font-weight: 400;
  color: #102a42;
  text-align: center;
  margin: 2.5rem auto 3.5rem;
  position: relative;
  font-size: 2.75rem;
  ${below.small_1`
    font-size: 2rem;
  `}
`;

const ContactGroup = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: auto;
  ${above.med_0`
    flex-direction: row;
    justify-content: center;
  `}
`;

const ContactPicStyled = styled.img`
  width: 250px;
  position: relative;
  top: -20px;
  ${below.med_0`
    order: -1;
    width: 200px;
  `}
`;

const ContactInfo = styled.p`
  font-size: 1.25rem;
  text-align: center;
  padding-top: 0.8rem;
  margin-right: 2.5rem;
  ${below.med_0`
    margin: auto;
  `}
`;

const HireMe = styled.section`
  max-width: 650px;
  margin: auto;
  margin-top: 3.2rem;
  padding-top: 3rem;
  position: relative;
  /* height: ${props => (props.showVid === 'No' ? '' : '465px')}; */
  padding-bottom: ${props => (props.showVid === 'No' ? '' : '225px')};
  transition: all 1s;
  position: relative;
  h3 {
    font-weight: 400;
    color: #102a42;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.05rem;
    line-height: 1.4;
    &#chanceLeadText {
      text-align: center;
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
  }
  ::before {
    display: inline-block;
    position: absolute;
    left: 0;
    top: -3.5px;
    height: 1px;
    width: 100%;
    background-image: linear-gradient(
      to right,
      #f5f5f9,
      #c3c3cc 20%,
      #8c8d99 50%,
      #c3c3cc 80%,
      #f5f5f9
    );
    content: '';
  }
  ${below.small_1`
    text-align: center;
  `}
  ${below.med_0`
    text-align: center;
  `}
`;

const TakeAChance = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  p {
    font-size: 0.7rem;
    text-align: left;
  }
`;

const ChanceVideoBlock = styled.div`
  position: absolute;
  bottom: ${props => (props.showVid === 'Yes' ? '-195px' : '30px')};
  /* bottom: -195px; */
  left: ${props => (props.showVid === 'Yes' ? '0' : '1000%')};
  display: flex;
  flex-direction: column;
  transition: all 1s;
  color: #102a42;
  background: ${props => (props.showVid === 'Yes' ? 'white' : 'none')};
  border-radius: 8px;
  padding: ${props => (props.showVid === 'Yes' ? '12px' : '0px')};
  width: 325px;
  right: 0;
  margin: auto;
  button.close {
    opacity: ${props => (props.showVid === 'Yes' ? 1 : 0)};
    background: white;
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

const ContactPage = () => {
  const [showVid, toggleVid] = useState('No');
  return (
    <Layout>
      <SEO
        title="Contact Me"
        keywords={[
          `mike raguso`,
          `raguso`,
          `slice of the web`,
          `portfolio`,
          `gatsby`,
          'contact me'
        ]}
      />
      <BreadCrumbs single />
      <ContactTitle>Contact Me</ContactTitle>
      <ContactGroup>
        <ContactInfo>
          Please feel free to email me here: <br />
          <MyEmail data-page="contact" href="mailto:mr.mraguso@gmail.com">
            mr.mraguso@gmail.com
          </MyEmail>
          and I will get back to you as soon as possible.
        </ContactInfo>
        <ContactPicStyled src={contactPic} alt="a mailbox" />
      </ContactGroup>
      <HireMe showVid={showVid}>
        <h3>Looking to hire?</h3>
        <p>
          I am currently available to discuss freelancing Front End/Back End development, design,
          UX|UI, and complex excel projects.
        </p>
        <p id="chanceLeadText">
          On the fence? - <em>Take a Chance on Me...</em>
        </p>
        <TakeAChance>
          <ListenButton background="white" onClick={() => toggleVid('Yes')} type="button">
            Listen
          </ListenButton>
          <ChanceVideoBlock showVid={showVid}>
            <button type="button" onClick={() => toggleVid('No')} className="close">
              Close <span style={{ color: 'inherit' }}>&#10006;</span>
            </button>
            {showVid === 'Yes' ? <TrimmedTakeAChance /> : ''}
          </ChanceVideoBlock>
        </TakeAChance>
      </HireMe>
    </Layout>
  );
};

export default ContactPage;
