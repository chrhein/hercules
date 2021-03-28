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

const FooterBackground = styled.div`
  border-radius: 18px 18px 0 0;
  width: fit-content;
  padding: 0;
  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.2);

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  -moz-backdrop-filter: blur(20px);
  -ms-backdrop-filter: blur(20px);
  -o-backdrop-filter: blur(20px);
  background-color: ${({ theme }) => theme.colors.footer};
  margin-left: auto;
  margin-right: auto;
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
        <FooterBackground>
          <Box p={[2, 2]} id="footer">
            <FooterContainer>
              <Fade />
              <Flex>
                <Fade>
                  {socialLinks.map(({ id, ...rest }) => (
                    <Box mx={[2, 3]} fontSize={[4, 5]} key={id}>
                      <SocialLink color="header" {...rest} />
                    </Box>
                  ))}
                </Fade>
              </Flex>
            </FooterContainer>
          </Box>
        </FooterBackground>
      );
    }}
  />
);

export default Footer;
