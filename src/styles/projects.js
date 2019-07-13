import styled, { css } from 'styled-components';

import { above } from '../utilities/breakpoints';
import { StyledLink } from './section';

export const ProjectCollection = styled.div`
  display: flex;
  flex-direction: column;
  ${above.med_2`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  `}
`;

const excelCard = css`
  background: linear-gradient(-45deg, white, #e8f1f2, white);
  border-top: 2px solid #7acfc0;
`;

const excelTitle = css`
  color: hsl(170, 100%, 15%);
`;

const excelText = css`
  color: hsl(170, 93%, 12%);
`;

export const CardLink = styled(StyledLink)`
  display: flex;
  padding: 0.5rem;
  height: 100%;
  padding-bottom: 1.3rem;
  ${above.med_0`
    padding: 10px 20px;
  `}
  ${above.med_2`
    padding-bottom: 1.3rem;
  `}
`;

export const ProjectCard = styled.article`
  background: #fff;
  /* background: linear-gradient(-45deg, white, #e4eefb, white); */
  background: linear-gradient(-45deg, white, #f0f7ff, white);
  border-radius: 10px;
  border-top: 2px solid #92aed0;
  box-shadow: 0 3px 6px hsla(0, 0%, 0%, 0.15), 0 2px 4px hsla(0, 0%, 0%, 0.12);
  margin: 10px auto 25px;
  position: relative;
  transition: transform, box-shadow 0.5s;
  max-width: 600px;
  width: 100%;
  ${props => (props.type === 'excel' ? excelCard : '')}
  :hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px hsla(0, 0%, 0%, 0.15), 0 3px 6px hsla(0, 0%, 0%, 0.1);
  }
  ${above.med_2`
    font-size: 1.5rem;
    max-width: 425px;
    margin-left: 15px;
    margin-right: 15px;
  `}
`;

export const ProjectTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 5px 0 0;
  color: hsl(214, 72%, 32%);
  ${props => (props.type === 'excel' ? excelTitle : '')}
  ${above.small_1`
    font-size: 1.3rem;
  `}
  ${above.med_1`
    font-size: 1.4rem;
  `}
`;

export const ProjectBioContainer = styled.p`
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 10px auto 20px;
  color: #293d50;
  ${props => (props.type === 'excel' ? excelText : '')}
  ${above.small_1`
    font-size: 0.95rem;
  `}
  ${above.med_1`
    margin: 10px auto 10px;
    font-size: 1.05rem;
  `}
  ${above.med_2`
    margin: 10px auto 20px;
    font-size: 1rem;
  `}
`;

export const ProjectTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  max-width: 75px;
  position: relative;
  margin: auto 15px auto 5px;
  ${above.med_1`
    margin-left: 0px;
    margin-right: 20px;
  `}
  ${above.med_2`
    margin-left: 5px;
    margin-right: 15px;
  `}
`;

const ProjectListingTagsStyle = css`
  ${above.small_1`
    padding-left: 6rem;
    justify-content: flex-start;
    `}
  ${above.med_0`
    padding-left: 0.5rem;
    bottom: initial;
    right: 0;
    top: 10px;
    justify-content: flex-end;
    `}
  ${above.med_2`
    padding-left: 6.5rem;
    bottom: 5px;
    right: initial;
    top: initial;
    justify-content: flex-start;
  `}
`;

const ProjectPageTagsStyle = css`
  ${above.small_1`
    padding-right: 3rem;
    justify-content: flex-end;
  `}
`;

export const TagsGroup = styled.ul`
  list-style: none;
  display: flex;
  position: absolute;
  margin: 0;
  width: 100%;
  padding-left: ${props => (props.listing ? 0 : '3rem')};
  justify-content: center;
  bottom: 5px;
  li {
    font-size: 0.7rem;
    text-transform: lowercase;
    font-weight: 500;
    padding: 2px 5px;
    margin-left: 5px;
    margin-right: 5px;
    background: #dce0e2;
    color: #383b3e;
    border-radius: 8px;
  }
  ${props => (props.listing ? ProjectListingTagsStyle : ProjectPageTagsStyle)}
`;
