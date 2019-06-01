import styled from 'styled-components';

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
  font-size: 1.85rem;
  &::after {
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: -3.5px;
    height: 2px;
    -webkit-transform: rotate(-1deg);
    -webkit-transform: rotate(-1deg);
    -ms-transform: rotate(-1deg);
    transform: rotate(-3deg);
    content: '';
  }
`;
