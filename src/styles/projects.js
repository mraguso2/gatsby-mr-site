import styled, { css } from 'styled-components';

import { above } from '../utilities/breakpoints';

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

export const ProjectCard = styled.article`
  box-shadow: 0 3px 6px hsla(0, 0%, 0%, 0.15), 0 2px 4px hsla(0, 0%, 0%, 0.12);
  padding: 15px;
  background: #fff;
  background: linear-gradient(-45deg, white, #e4eefb, white);
  background: linear-gradient(-45deg,white,#f0f7ff,white);
  margin: 10px auto 25px;
  border-radius: 10px;
  display: flex;
  max-width: 600px;
  width: 100%;
  border-top: 2px solid #92aed0;
  transition: transform, box-shadow 0.5s;
  position: relative;
  min-height: 145px;
  ${props => (props.excel === 'true' ? excelCard : '')}
  :hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px hsla(0, 0%, 0%, 0.15), 0 3px 6px hsla(0, 0%, 0%, 0.10);
  }
  ${above.small_1`
    height: auto;
  `}
  ${above.med_1`
    padding: 20px;
  `}
  ${above.med_2`
    font-size: 1.5rem;
    max-width: 425px;
    margin-left: 15px;
    margin-right: 15px;
    padding: 8px;
  `}
`;

export const ProjectTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
  margin: 5px 0 0;
  color: hsl(214, 72%, 32%);
  ${props => (props.excel === 'true' ? excelTitle : '')}
  ${above.med_1`
    font-size: 1.5rem;
  `}
`;

export const ProjectBioContainer = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 10px auto 10px;
  color: #293d50;
  ${above.med_1`
    margin: 10px auto 10px;
    font-size: 1.05rem;
  `}
  ${above.med_2`
    margin: 10px auto 10px;
    font-size: 1rem;
  `}
`;

export const ProjectTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 90px;
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
