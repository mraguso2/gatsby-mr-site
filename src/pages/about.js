import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BreadCrumbs from '../components/breadcrumbs';
import AboutImage from '../components/imageAbout';
import {
  Hero,
  HeroTitle,
  ListSection,
  ListSectionTitle,
  ListGroup,
  ListGroupTitle,
  StyledList
} from '../styles/section';
import { above } from '../utilities/breakpoints';
import MyFace from '../components/myFace';
import camera from '../images/heroicon-camera-sm.svg';

const Greeting = styled.h3`
  position: absolute;
  top: 20px;
  color: hsl(200, 67%, 98%);
  z-index: 10;
  text-align: center;
  text-shadow: 0 0 50px hsla(0, 0%, 0%, 0.4);
  background: hsla(209, 61%, 16%, 0.45);
  right: 20px;
  padding: 5px;
  border-radius: 8px;
`;

const PicGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  max-width: 350px;
  position: relative;
  margin-top: 30px;
  margin-bottom: 80px;
  ${above.med_1`
    max-width: 420px;
  `}
  ::after {
    content: '';
    position: absolute;
    background: #ffffff;
    top: 0;
    bottom: 0;
    z-index: -1;
    max-width: 500px;
    width: 375px;
    transform: skew(40deg);
    height: 110px;
    margin: auto;
    left: -115px;
  }
`;

const CameraGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  p {
    text-align: center;
    margin: 0;
    font-size: 0.9rem;
  }
  img {
    width: 50px;
    ${above.small_1`
      width: 50px;
    `}
  }
`;

const Bio = styled.section`
  line-height: 1.6;
  max-width: 500px;
  margin: auto;
  padding-bottom: 20px;
  p {
    text-indent: 40px;
    text-align: left;
  }
  h3 {
    color: #5a687b;
    font-weight: 500;
    margin: 0 auto 10px;
  }
  span {
    font-size: 0.9rem;
    text-align: center;
    display: block;
    background: #ffffff;
  }
`;

const skills = {
  frontend: ['JavaScript', 'ReactJS', 'NextJS', 'GatsbyJS', 'UX/UI', 'CSS3', 'HTML5'],
  backend: ['SQL', 'Express', 'NodeJS', 'MongoDB', 'Serverless', 'Microsoft Access'],
  general: ['Lean Six Sigma', 'Excel VBA', 'Instructor', 'Tableau', 'Data Analytics']
};

const myFaceStyles = {
  borderRadius: '3px',
  transform: 'rotate(-5deg)',
  borderBottom: '30px solid white',
  borderLeft: '10px solid white',
  borderTop: '10px solid white',
  borderRight: '10px solid white',
  boxShadow: '0px 0px 10px rgba(0,0,0,0.2)'
};

const AboutPage = () => (
  <Layout>
    <SEO
      title="About Me"
      keywords={[`mike raguso`, `raguso`, `slice of the web`, `portfolio`, `gatsby`]}
    />
    <BreadCrumbs single />
    <Hero data-hero="about">
      <AboutImage style={{ height: '100%' }} />
      <Greeting>
        Hi, my <br />
        name is <br />
        Mike Raguso
      </Greeting>
    </Hero>
    <HeroTitle>About Me</HeroTitle>
    <PicGroup>
      <CameraGroup>
        <img src={camera} alt="camera" />
        <p>Cheeese!</p>
      </CameraGroup>
      <MyFace style={myFaceStyles} noText outlineColor="hsl(209,61%,16%)" />
    </PicGroup>
    <ListSection>
      <ListSectionTitle>Skills</ListSectionTitle>
      <article>
        <ListGroup>
          <ListGroupTitle>FRONTEND</ListGroupTitle>
          <StyledList>
            {skills.frontend.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </StyledList>
        </ListGroup>
        <ListGroup>
          <ListGroupTitle>BACKEND</ListGroupTitle>
          <StyledList>
            {skills.backend.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </StyledList>
        </ListGroup>
        <ListGroup>
          <ListGroupTitle>GENERAL</ListGroupTitle>
          <StyledList>
            {skills.general.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </StyledList>
        </ListGroup>
      </article>
    </ListSection>
    <Bio>
      <div>
        <h3>My Bio</h3>
        <p>
          I am a full stack web developer, designer and industrial & systems engineer. I love
          technology, building web products and solving problems. Evaluating and designing user
          experiences has become one of my passions. I am fascinated with how a design, interaction
          or perception can influence a user’s experience. Typically I can be caught working on web
          applications, websites, simple demos, fun projects and <em>“the-next-big-thing”</em>.
        </p>
        <p>
          I have been lucky to work with various industries from simple to complex projects. From
          static websites to dynamic web applications to complex VBA excel solutions I have been
          able to learn and fail along the way. I like to teach what I know to others. Successfully
          helping someone understand a new or challenging concept is very rewarding.
        </p>
        <p>
          Besides <em>nerding out</em> – I love being outside, exploring places I’ve never been,
          eating at places I’ve never been, eating just in general, going to local breweries, garage
          sales and learning the next useless fun fact.
        </p>
        <span>
          Check out my <Link to="/projects">projects here!</Link>
          <br />
          Have a question or want to say Hi? <Link to="/contact">contact me here!</Link>
        </span>
      </div>
    </Bio>
  </Layout>
);

export default AboutPage;
