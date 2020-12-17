import React, { Fragment } from 'react';
import Headroom from 'react-headroom';
import { Box, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import RouteLink from './RouteLink';
import Toggle from './Toggler';

const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  * {
    transition: background-color 0.5s ease;
  }
  .headroom--pinned {
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.text};
  }
  position: absolute;
  width: 100%;
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

const Header = ({theme, themeToggler}) => (
  <HeaderContainer>
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

          const toggle = (
            <Box ml={[2, 3]} color="background" fontSize={[2, 3]}>
              <Toggle theme={theme} toggleTheme={themeToggler} />
            </Box>
          );

          return (
            <Fragment>
              {homeLink}
              <Flex mr={[0, 3, 4]}>
                {navLinks}
                {toggle}
              </Flex>
            </Fragment>
          );
        }}
      </SectionLinks>
    </Flex>
  </HeaderContainer>
);

export default Header;
