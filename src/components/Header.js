import React, { Fragment } from 'react';
import Headroom from 'react-headroom';
import { Box, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import RouteLink, { DarkToggler } from './RouteLink';
import Toggle from './Toggler';
import LinkAnimated from './LinkAnimated';

const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  * {
    transition: background-color 0.5s ease;
  }
  .headroom--pinned {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    color: red;
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

const Header = ({ theme, themeToggler }) => (
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
                {navLinks}
                <DarkToggler theme={theme} toggle={themeToggler}/>
              </Flex>
            </Fragment>
          );
        }}
      </SectionLinks>
    </Flex>
  </HeaderContainer>
);

export default Header;
