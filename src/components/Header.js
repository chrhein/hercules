import React, { Fragment } from 'react';
import Headroom from 'react-headroom';
import { Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import RouteLink, { DarkToggler } from './RouteLink';

const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  * {
    transition: background-color 0.3s ease;
  }

  .headroom--pinned, .headroom--unpinned, .headroom--scrolled{
    background-color: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.text};
  }

  
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const formatLinks = (allLinks) =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === 'home';
      return isHome
        ? {
          ...acc,
          home: value,
        }
        : {
          ...acc,
          links: [...acc.links, { name: capitalize(key), value }],
        };
    },
    { links: [], home: null },
  );

const Header = ({ theme, themeToggler }) => (
  <HeaderContainer disableInlineStyles upTolerance={500}>
    <Flex
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      p={3}
    >
      <SectionLinks>
        {({ allLinks }) => {
          const { home, links } = formatLinks(allLinks);

          const homeLink = home && (
            <RouteLink
              key={'home'}
              onClick={home.onClick}
              selected={home.isSelected}
              name={'Home'}
            />
          );

          const navLinks = links.map(({ name, value }) => (
            <RouteLink
              key={name}
              onClick={value.onClick}
              selected={value.isSelected}
              name={name}
            />
          ));

          /*
          const toggle = (
            <Box ml={[2, 3]} color='#e2e6eb' fontSize={[2, 3]}>
              <LinkAnimated onClick={onClick} selected={selected} tabIndex={0}>
                <Toggle theme={theme} toggleTheme={themeToggler} />
              </LinkAnimated>
            </Box>
          );
           */

          return (
            <Fragment>
              {homeLink}
              <Flex mr={[0, 3, 4]}>
                <DarkToggler theme={theme} toggle={themeToggler} />
                {navLinks}
              </Flex>
            </Fragment>
          );
        }}
      </SectionLinks>
    </Flex>
  </HeaderContainer>
);

export default Header;
