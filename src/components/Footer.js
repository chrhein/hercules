import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Box, Flex } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import SocialLink from './SocialLink';

const FooterContainer = styled.div`
  max-width: 1366px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  @media (max-width: 400px) {
    flex-direction: column-reverse;

    & > * {
      margin-bottom: 10px;
    }
  }
`;

const Footer = () => (
  <StaticQuery
    query={graphql`
      query footerQuery {
        landingInfoJson {
          socialLinks {
            id
            url
            name
            fontAwesomeIcon
          }
        }
      }
    `}
    render={(footerQuery) => {
      const { socialLinks } = footerQuery.landingInfoJson;

      return (
        <Box p={[2, 3]} backgroundColor={({ theme }) => theme.primaryDark} id="footer">
          <FooterContainer>
            <Fade left></Fade>
            <Flex>
              <Fade right>
                {socialLinks.map(({ id, ...rest }) => (
                  <Box mx={[2, 3]} fontSize={[4, 5]} key={id}>
                    <SocialLink {...rest} color={({ theme }) => theme.background} />
                  </Box>
                ))}
              </Fade>
            </Flex>
          </FooterContainer>
        </Box>
      );
    }}
  />
);

export default Footer;
