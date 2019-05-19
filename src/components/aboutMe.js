import React from 'react';
import styled from 'styled-components';

import Image from './image';
import colors from '../utilities/colors';
import { above, below } from '../utilities/breakpoints';

const AboutContainer = styled.section`
  background: ${colors.purple.primPurple8};
  color: ${colors.purple.primPurple1};
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #690cb0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23e9d4f9' fill-opacity='0.08'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  padding: 5px 15px 15px;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

const AboutContentStyled = styled.div`
  max-width: 960px;
  margin: auto;
  width: 100%;
  & .aboutMeSummary {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const AboutMeSummaryText = styled.h4`
  margin-left: 15px;
  text-align: center;
  line-height: 1.5;
  font-size: 1.05rem;
  max-width: 280px;
  ${above.small_1`
  font-size: 1.5rem;
  `}
  ${above.med_2`
    font-size: 1.7rem;
    max-width: 330px;
    margin-left: 55px;
  `}
`;

const AboutMeFullText = styled.span`
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  background: #690cb0;
  font-weight: 500;
`;

const FullTextContainer = styled.p`
  line-height: 1.2;
  max-width: 650px;
  margin: auto;
  ${above.med_1`
    max-width: 650px;
    margin: auto;
    line-height: 1.3;
  `}
  ${above.med_2`
    max-width: 750px;
    margin: auto;
    line-height: 1.45;
  `}
`;

const Title = styled.h2`
  font-weight: 400;
  display: inline-block;
  position: relative;
  &::after {
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: -3.5px;
    height: 2px;
    width: 110px;
    /* margin-left: -2.5%; */
    background: #f1f5f8;
    -webkit-transform: rotate(-1deg);
    -webkit-transform: rotate(-1deg);
    -ms-transform: rotate(-1deg);
    transform: rotate(-3deg);
    content: '';
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 130px;
  ${below.small_0`
    max-width: 110px;
  `}
  ${above.small_1`
    max-width: 150px;
  `}
  ${above.med_1`
    max-width: 190px;
  `}
  & p {
    text-align: center;
    margin-top: 5px;
    font-size: 0.9rem;
  }
`;

const AboutMe = () => (
  <AboutContainer id="aboutMe">
    <AboutContentStyled>
      <Title>About Me</Title>
      <div>
        <div className="aboutMeSummary">
          <ImageContainer>
            <Image style={{ borderRadius: '50%', border: '2px solid hsl(262,90%,96%)' }} />
            <p>^ That's Me</p>
          </ImageContainer>
          <div>
            <AboutMeSummaryText>
              I am a web builder, problem solver, problem maker, teacher and overall nerd
            </AboutMeSummaryText>
          </div>
        </div>
        <FullTextContainer>
          <AboutMeFullText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </AboutMeFullText>
        </FullTextContainer>
      </div>
    </AboutContentStyled>
  </AboutContainer>
);

export default AboutMe;

// triangles
// background-color: #690cb0;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23e9d4f9' fill-opacity='0.12'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

// hexagons
// background-color: #690cb0;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23e9d4f9' fill-opacity='0.12' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

// temple
// background-color: #690cb0;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23e9d4f9' fill-opacity='0.12'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
