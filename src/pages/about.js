import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BreadCrumbs from '../components/breadcrumbs';
import AboutImage from '../components/imageAbout';
import { SectionTitle } from '../styles/section';
import { below, above } from '../utilities/breakpoints';
import MyFace from '../components/myFace';
import camera from '../images/heroicon-camera-sm.svg';
import iconCheveron from '../images/icon-cheveron-right-circle.svg';

const AboutTitle = styled(SectionTitle)`
  background: white;
  border-radius: 10px;
  padding: 8px;
  position: relative;
  top: -20px;
  left: 15px;
  box-shadow: 0 3px 6px hsla(0, 0%, 0%, 0.15), 0 2px 4px hsla(0, 0%, 0%, 0.12);
`;

const Hero = styled.div`
  position: relative;
  margin-top: 5px;
  height: 250px;
  ::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    width: 100%;
    height: 100%;
    border: 2px solid #92aed0;
  }
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, hsla(0, 0%, 0%, 0.15) 80%, hsla(0, 0%, 0%, 0.55));
  }
  ${above.med_1`
    height: 300px;
  `}
`;

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

const Skills = styled.section`
  margin-bottom: 35px;
  article {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    ${below.small_0`
      justify-content: flex-start;
    `}
  }
  ul {
    list-style: none;
    ${below.small_1`
      padding-left: 30px;
    `}
  }
  h3 {
    text-align: center;
    /* border-top: 1px solid #c7d0de;
    border-bottom: 1px solid #c7d0de; */
    color: hsl(274, 87%, 31%);
    font-weight: 400;
    position: relative;
    margin-bottom: 32px;
    ::after {
      display: inline-block;
      position: absolute;
      left: 0;
      bottom: -3.5px;
      height: 1px;
      width: 100%;
      background-image: linear-gradient(
        to right,
        hsl(210, 36%, 96%),
        hsl(264, 96%, 70%) 30%,
        hsl(273, 80%, 49%) 50%,
        hsl(264, 96%, 70%) 70%,
        hsl(210, 36%, 96%)
      );
      content: '';
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
        hsl(210, 36%, 96%),
        hsl(264, 96%, 70%) 30%,
        hsl(273, 80%, 49%) 50%,
        hsl(264, 96%, 70%) 70%,
        hsl(210, 36%, 96%)
      );
      content: '';
    }
  }
  li {
    padding-bottom: 10px;
    position: relative;
    display: flex;
    align-items: center;
    ${below.small_1`
      font-size: 0.95rem;
    `}
    ::before {
      content: url(${iconCheveron});
      width: 25px;
      position: relative;
      display: inline-block;
      margin-right: 7px;
      top: 1.5px;
    }
  }
`;

const ListGroup = styled.div`
  min-width: 33%;
  margin-bottom: 10px;
  ${below.small_0`
    width: 100%;
  `}
`;

const SkillsGroupTitle = styled.p`
  letter-spacing: 0.3px;
  color: #5a687b;
  font-size: 0.85rem;
  font-weight: 600;
  text-align: center;
  margin: 0 auto 10px;
  ${above.med_2`
    text-align: left;
    margin-left: 1.75rem;
    margin-top: 5px
  `}
`;

const Bio = styled.section`
  line-height: 1.6;
  max-width: 500px;
  margin: auto;
  p {
    text-indent: 40px;
    text-align: left;
  }
`;

const skills = {
  frontend: ['JavaScript', 'CSS3', 'HTML5', 'ReactJS', 'GatsbyJS', 'WordPress', 'UX/UI'],
  backend: ['SQL', 'Express', 'NodeJS', 'MongoDB', 'Firebase', 'Microsoft Access'],
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
    <BreadCrumbs home single />
    <Hero>
      <AboutImage style={{ height: '100%' }} />
      <Greeting>
        Hi my <br />
        name is <br />
        Mike Raguso
      </Greeting>
    </Hero>
    <AboutTitle>About Me</AboutTitle>
    <PicGroup>
      <CameraGroup>
        <img src={camera} alt="camera" />
        <p>Cheeese!</p>
      </CameraGroup>
      <MyFace style={myFaceStyles} noText outlineColor="hsl(209,61%,16%)" />
    </PicGroup>
    <Skills>
      <h3>Skills</h3>
      <article>
        <ListGroup>
          <SkillsGroupTitle>FRONTEND</SkillsGroupTitle>
          <ul>
            {skills.frontend.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </ListGroup>
        <ListGroup>
          <SkillsGroupTitle>BACKEND</SkillsGroupTitle>
          <ul>
            {skills.backend.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </ListGroup>
        <ListGroup>
          <SkillsGroupTitle>GENERAL</SkillsGroupTitle>
          <ul>
            {skills.general.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </ListGroup>
      </article>
    </Skills>
    <Bio>
      <div>
        <h4>Bio</h4>
        <p>
          I am a full stack web developer, designer and industrial & systems engineer. I love
          technology, building web products and solving problems. My free time is spent developing
          web applications, websites, simple demos, fun projects and <em>“the-next-big-thing”</em>.
          Evaluating and designing user experiences has become one of my passions. I am fascinated
          with human psychology and how a design, interaction or perception can influence a user’s
          experience.
        </p>
        <h4>Experience</h4>
        <p>
          I have experience in many industries from healthcare to manufacturing and worked on
          various types of projects from performance improvement to excel VBA automation to full web
          applications. I like to teach what I know to others. I feel a sense of accomplishment when
          I am able to help someone understand a new or challenging concept.
        </p>
        <h4>Interests</h4>
        <p>
          Besides <em>nerding</em> – I love being outside, exploring places I’ve never been, eating
          at places I’ve never been, eating just in general, going to local breweries, garage sales
          and learning the next useless fun fact.
        </p>
      </div>
    </Bio>
  </Layout>
);

export default AboutPage;
