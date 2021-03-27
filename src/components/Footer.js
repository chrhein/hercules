import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Box, Flex } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import SocialLink from './SocialLink';
import { HeaderShade, HeaderShadow } from './Header';

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
  background-color: ${({ theme }) => theme.colors.primary};
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
          <Box p={[2, 3]} id="footer">
            <FooterContainer>
              <Fade />
              <Flex>
                <Fade>
                  {socialLinks.map(({ id, ...rest }) => (
                    <Box mx={[2, 3]} fontSize={[4, 5]} key={id}>
                      <SocialLink {...rest} />
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
