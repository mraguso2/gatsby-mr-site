import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BreadCrumbs from '../components/breadcrumbs';
import { MyEmail } from '../styles/section';
import { below } from '../utilities/breakpoints';
import contactPic from '../images/undraw-online-discussion.svg';
// import contactPic from '../images/undraw-mailbox.svg';

const ContactTitle = styled.h1`
  font-weight: 400;
  color: #102a42;
  text-align: center;
  margin: 2.5rem auto 3.5rem;
  position: relative;
`;

const ContactGroup = styled.section`
  display: flex;
  justify-content: center;
  max-width: 600px;
  margin: auto;
  ${below.med_0`
    flex-direction: column;
    align-items: center;
  `}
`;

const ContactPicStyled = styled.img`
  width: 250px;
  position: relative;
  top: -20px;
  ${below.med_0`
    order: -1;
    width: 200px;
  `}
`;

const ContactInfo = styled.p`
  font-size: 1.25rem;
  text-align: center;
  padding-top: 0.8rem;
  line-height: 1.35;
  margin-right: 2.5rem;
`;

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact Me"
      keywords={[`mike raguso`, `raguso`, `slice of the web`, `portfolio`, `gatsby`, 'contact me']}
    />
    <BreadCrumbs single />
    <ContactTitle>Contact Me</ContactTitle>
    <ContactGroup>
      <ContactInfo>
        Please feel free to email me here: <br />
        <MyEmail data-page="contact" href="mailto:mr.mraguso@gmail.com">
          mr.mraguso@gmail.com
        </MyEmail>
        and I will get back to you as soon as possible.
      </ContactInfo>
      <ContactPicStyled src={contactPic} alt="a mailbox" />
    </ContactGroup>
  </Layout>
);

export default ContactPage;
