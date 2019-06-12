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
  ul {
    list-style: none;
  }
  li {
    padding-bottom: 10px;
    position: relative;
    display: flex;
    align-items: center;
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

const Bio = styled.section`
  line-height: 1.6;
  max-width: 500px;
  margin: auto;
  p {
    text-indent: 40px;
    text-align: left;
  }
`;

const skills = [
  'JavaScript',
  'CSS3',
  'HTML5',
  'ReactJS',
  'GatsbyJS',
  'WordPress',
  'UX/UI',
  'Express',
  'NodeJS',
  'MongoDB',
  'Firebase',
  'SQL',
  'VBA',
  'Tableau',
  'Lean Six Sigma',
  'Data Analytics'
];

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
      <article>
        <ul>
          {skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </article>
    </Skills>
    <Bio>
      <div>
        <p>
          I am a full stack web developer, designer and industrial & systems engineer. I love
          technology and building web products. I like to spend time developing web applications,
          websites, simple demos, fun projects and <em>“the-next-big-thing”</em>. Evaluating and
          designing user experiences has become one of my passions. I am fascinated with human
          psychology and how a design, interaction or perception can influence a user’s experience.
        </p>
        <p>
          I have experience in many industries from healthcare to manufacturing and worked on
          various types of projects from performance improvement to excel VBA automation to full web
          applications. I like to teach what I know to others. I feel a sense of accomplishment when
          I am able to help someone understand a new or challenging concept.
        </p>
        <p>
          Besides nerding – I love being outside, exploring places I’ve never been, eating at places
          I’ve never been, eating just in general, going to local breweries, learning the next
          useless fun fact.
        </p>
      </div>
    </Bio>
  </Layout>
);

export default AboutPage;
