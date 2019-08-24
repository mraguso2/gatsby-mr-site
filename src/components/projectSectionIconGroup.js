import React from 'react';
import styled from 'styled-components';

import { above, below } from '../utilities/breakpoints';
import { StyledList, ListGroupTitle } from '../styles/section';
import sign from '../images/heroicon-sign-sm.svg';
import clipboard from '../images/heroicon-form-sm.svg';
import triangleDots from '../images/triangle-dots.svg';
import circleDots from '../images/circle-dots.svg';
import githubLogo from '../images/logo-github.svg';
import externalLink from '../images/icon-external-window.svg';

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  background: ${props =>
    props.type === 'excel' ? 'hsla(166, 99%, 94%, 1)' : 'hsla(210, 99%, 94%, 1)'};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 2px 10px;
  position: relative;
  max-width: 20rem;
  width: 100%;
  overflow: hidden;
  text-transform: uppercase;
  img {
    margin-right: 0.6rem;
    width: 40px;
    ${below.med_1`
      width: 35px;
    `}
  }
  p {
    line-height: 1.4;
    letter-spacing: 1px;
    font-weight: 400;
    /* color: hsl(168, 80%, 23%); */
    /* color: hsl(209, 61%, 16%); */
    color: ${props => (props.type === 'excel' ? 'hsl(166, 54%, 24%)' : 'hsl(214, 78%, 44%);')};
    font-size: 1.4rem;
    margin: 0.5rem 0;
    ${below.med_0`
      font-size: 1.4rem;
    `}
  }
  ${below.med_1`
    margin-right: 0;
  `}
  ::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 100px;
    transform: rotate(40deg);
    background: white;
    top: -10px;
    right: -10px;
    border-radius: 2px;
  }
`;

const imageSrc = iconName => {
  let source;
  switch (iconName) {
    case 'clipboard':
      source = clipboard;
      break;
    case 'sign':
      source = sign;
      break;
    default:
      source = '';
  }
  return source;
};

const Description = styled.section`
  display: flex;
  padding-top: 50px;
  padding-bottom: 50px;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
`;

const DescText = styled.div`
  line-height: 1.6;
  padding: 15px 15px 15px 0px;
  position: relative;
  border-radius: 2px;
  margin: 0;
  p {
    margin: 0;
  }
`;

const CodeDetails = styled.section`
  margin: auto;
  max-width: 650px;
  padding: 30px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  ${above.med_0`
    flex-direction: row;
  `}
  ::before {
    content: url(${circleDots});
    position: absolute;
    width: 100px;
    opacity: 0.8;
    z-index: -1;
    left: 0px;
    bottom: 10px;
    ${above.med_0`
      bottom: -30px;
    `}
  }
  ::after {
    content: url(${triangleDots});
    position: absolute;
    width: 100px;
    opacity: 0.8;
    z-index: -1;
    right: 10px;
    top: -10px;
    ${above.med_0`
      top: -40px;
    `}
  }
`;

const CodeDetailItems = styled.div`
  position: relative;
  ${above.med_0`
    width: ${props => (props.type === 'excel' || props.github === '' ? '' : '50%')};
    margin: ${props => (props.type === 'excel' || props.github === '' ? 'auto' : '')};
  `}
  &.builtWith {
    ul {
      max-width: 450px;
      margin: 1rem auto;
    }
  }
  &.github {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      margin-bottom: 1rem;
    }
    .logoGithub {
      margin-right: 0.5rem;
    }
    .iconLink {
      width: 1.2rem;
    }
    ::before {
      content: '';
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
      ${above.med_0`
        height: 100%;
        width: 1px;
        bottom: -3.5px;
        background-image: linear-gradient(
        to bottom,
        hsl(210, 36%, 96%),
        hsl(264, 96%, 70%) 30%,
        hsl(273, 80%, 49%) 50%,
        hsl(264, 96%, 70%) 70%,
        hsl(210, 36%, 96%)
      )
      `}
    }
  }
`;

const GithubLinkStyled = styled.a`
  padding: 5px 10px;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1), 0px 0px 30px rgba(0, 0, 0, 0.15);
  transition: transform, box-shadow 0.5s;
  :hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 40px hsla(0, 0%, 0%, 0.15), 0 3px 6px hsla(0, 0%, 0%, 0.1);
  }
`;

const GithubBlock = ({ gitLink }) => (
  <CodeDetailItems className="github">
    <p>Check out the code at</p>
    <GithubLinkStyled role="button" href={gitLink}>
      <img className="logoGithub" src={githubLogo} alt="Github Logo" />
      <img className="iconLink" src={externalLink} alt="external link icon" />
    </GithubLinkStyled>
  </CodeDetailItems>
);

export const ProjectSectionTools = ({ frontmatter: { type, github }, children }) => (
  <CodeDetails>
    <CodeDetailItems type={type} github={github} className="builtWith">
      <ListGroupTitle size="1rem">Built Using:</ListGroupTitle>
      <StyledList>
        {React.Children.toArray(children).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </StyledList>
    </CodeDetailItems>
    {type === 'web' && github !== '' ? <GithubBlock gitLink={github} /> : ''}
  </CodeDetails>
);

const ProjectSectionIconGroup = ({ frontmatter: { type }, iconInfo, sectionHeader, children }) => (
  <Description>
    <IconGroup type={type}>
      <img src={imageSrc(iconInfo)} alt={iconInfo} />
      <p>{sectionHeader}</p>
    </IconGroup>
    <DescText sectionHeader={sectionHeader}>{children}</DescText>
  </Description>
);

export default ProjectSectionIconGroup;
