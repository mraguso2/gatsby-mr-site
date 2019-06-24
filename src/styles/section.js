import styled, { css } from 'styled-components';

import { above } from '../utilities/breakpoints';
import envelope from '../images/envelope.svg';

export const SectionContainer = styled.section`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const FullWidthContainer = styled(SectionContainer)`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 5px 15px 15px;
  z-index: 1;
`;

export const SectionContentStyled = styled.div`
  max-width: 960px;
  margin: 30px auto;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  font-weight: 400;
  display: inline-block;
  position: relative;
  font-size: 1.9rem;
  margin-bottom: 1.55rem;
  a,
  a:visited {
    color: ${props => props.color || 'inherit'};
    text-decoration: none;
  }
  &::after {
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: -3.5px;
    height: 2px;
    width: ${props => props.width || ''};
    background: ${props => props.color || '#102a42'};
    -webkit-transform: rotate(-1deg);
    -webkit-transform: rotate(-1deg);
    -ms-transform: rotate(-1deg);
    transform: rotate(-3deg);
    content: '';
  }
`;

export const HeroTitle = styled(SectionTitle)`
  background: white;
  border-radius: 10px;
  padding: 8px;
  position: relative;
  top: -20px;
  left: 15px;
  box-shadow: 0 3px 6px hsla(0, 0%, 0%, 0.15), 0 2px 4px hsla(0, 0%, 0%, 0.12);
`;

const aboutHero = css`
  height: 250px;
  ::after {
    background: linear-gradient(180deg, hsla(0, 0%, 0%, 0.15) 80%, hsla(0, 0%, 0%, 0.55));
  }
  ${above.med_1`
    height: 300px;
  `}
`;

const projectsHero = css`
  height: 200px;
  ::after {
    background: linear-gradient(180deg, hsla(214, 79%, 44%, 0.15) 80%, hsla(214, 79%, 44%, 0.2));
  }
  ${above.med_1`
    height: 275px;
  `}
`;

export const Hero = styled.div`
  position: relative;
  margin-top: 5px;
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
  ${props => (props['data-hero'] === 'about' ? aboutHero : '')};
  ${props => (props['data-hero'] === 'projects' ? projectsHero : '')};
`;

const emailContactPage = css`
  margin: 1rem auto;
  width: 261px;
  background: white;
  ::before {
    width: 19px;
  }
`;

export const MyEmail = styled.a`
  width: ${props => props.width || '215px'};
  display: block;
  text-align: center;
  padding: 8px 8px 8px 30px;
  color: #002a61;
  background: #e4ecf7;
  text-decoration: none;
  border-radius: 10px;
  position: relative;
  margin: auto;
  ::before {
    content: url(${envelope});
    width: 15px;
    position: absolute;
    left: 8px;
    top: 11px;
  }
  ${props => (props['data-page'] === 'contact' ? emailContactPage : '')}
`;
