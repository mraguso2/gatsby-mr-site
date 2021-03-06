import React from 'react';
import styled from 'styled-components';

import { above } from '../utilities/breakpoints';
import { FullWidthContainer, SectionContentStyled } from '../styles/section';
import MyFace from './myFace';

const AboutContainer = styled(FullWidthContainer)`
  top: 10px;
  color: hsl(214, 53%, 93%);
  background: #1663c7;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23e9d4f9' fill-opacity='0.08'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
    linear-gradient(180deg, hsl(214, 93%, 30%), hsl(214, 71%, 55%));
`;

const AboutContentStyled = styled(SectionContentStyled)`
  margin-bottom: 15px;
  & .aboutMeSummary {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .linkToMore {
    letter-spacing: 1px;
    font-weight: 600;
    color: #064495;
    background: #f4f8fd;
    padding: 4px;
    border-radius: 5px;
    font-size: 0.8rem;
    display: block;
    width: 125px;
    text-align: center;
    margin: 30px auto 0;
    text-decoration: none;
    box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.12);
  }
`;

const SentenceDescription = styled.h4`
  margin-left: 15px;
  text-align: center;
  line-height: 1.5;
  font-size: 1.1rem;
  max-width: 280px;
  font-family: 'Muli', sans-serif;
  ${above.small_1`
    font-size: 1.5rem;
    margin-left: 45px;
  `}
  ${above.med_2`
    font-size: 1.7rem;
    max-width: 330px;
    margin-left: 55px;
  `}
`;

const MiniBioContainer = styled.p`
  line-height: 1.5;
  max-width: 660px;
  margin: 10px auto 10px;
  ${above.med_1`
    max-width: 660px;
    margin: 10px auto 10px;
    font-size: 1.02rem;
  `}
  ${above.med_2`
    max-width: 750px;
    margin: 10px auto 10px;
    font-size: 1.08rem;
  `}
`;

const MiniBioText = styled.span`
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  background: #3176d0;
  font-weight: 500;
`;

const AboutMeBlock = () => (
  <AboutContainer id="aboutMe">
    <AboutContentStyled>
      <div>
        <div className="aboutMeSummary">
          <MyFace outlineColor="hsl(214, 53%, 93%)" />
          <div>
            <SentenceDescription>
              I am a web builder, problem solver, problem maker, teacher and overall nerd
            </SentenceDescription>
          </div>
        </div>
        <MiniBioContainer>
          <MiniBioText>
            I love tech and building things on the web. Luckily I enjoy solving problems since I
            regularly create new ones by breaking things. I enjoy teaching and attempting to explain
            complex topics in an easy to understand concept.
          </MiniBioText>
        </MiniBioContainer>
      </div>
      <a className="linkToMore" href="/about">
        TELL ME MORE
      </a>
    </AboutContentStyled>
  </AboutContainer>
);

export default AboutMeBlock;
