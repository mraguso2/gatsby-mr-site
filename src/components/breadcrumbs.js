import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding-bottom: 5px;
  font-size: 0.85rem;
  a,
  span {
    padding-right: 3px;
    color: #5a687b;
    #noSpace {
      padding-right: 0;
    }
  }
`;

const LeftArrow = () => <span id="noSpace">&larr;</span>;
const RightArrow = () => <span>&rarr;</span>;
const Projects = () => <Link to="/projects">Projects</Link>;

const BreadCrumbs = ({ single, projects }) => (
  <Container>
    <Link to="/">{single ? <LeftArrow /> : ''} Home</Link>
    {single ? '' : <RightArrow />}
    {projects ? <Projects /> : ''}
  </Container>
);

BreadCrumbs.propTypes = {
  single: PropTypes.bool,
  projects: PropTypes.bool
};

BreadCrumbs.defaultProps = {
  single: false,
  projects: false
};

export default BreadCrumbs;
