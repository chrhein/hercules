import React, { Fragment } from 'react';
import Headroom from 'react-headroom';
import { Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { useScrollSections } from 'react-scroll-section';
import RouteLink, { DarkToggler } from './RouteLink';
import { SectionShadow } from './SectionBackground';

const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  * {
    transition: background-color 0.3s ease;
  }

  position: fixed;
  width: 100%;
  z-index: 1;
`;

const HeaderShadow = styled(SectionShadow)`
  width: 100%;
  padding: 0;
  border-radius: 0 0 18px 18px;
  backdrop-filter: blur(20px);
`;

const HeaderShade = styled.div`
  background-color: ${({ theme }) => theme.colors.menuBar};
  opacity: 0.5;
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

// eslint-disable-next-line react/prop-types
const Header = ({ theme, themeToggler }) => {
  const { links } = formatLinks(useScrollSections());

  const homeLink = links
    .filter(({ value }) => value.id === 'home')
    .map(({ value }) => (
      <RouteLink
        key={value.id}
        onClick={value.onClick}
        selected={value.isSelected}
        name={capitalize(value.id)}
      />
    ));

  const navLinks = links
    .filter(({ value }) => value.id !== 'home')
    .map(({ value }) => (
      <RouteLink
        key={value.id}
        onClick={value.onClick}
        selected={value.isSelected}
        name={capitalize(value.id)}
      />
    ));

  return (
    <HeaderContainer disableInlineStyles upTolerance={500}>
      <HeaderShadow>
        <HeaderShade>
          <Flex
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
            p={3}
          >
            <Fragment>
              {homeLink}
              <Flex mr={[0, 3, 4]}>
                <DarkToggler theme={theme} toggle={themeToggler} />
                {navLinks}
              </Flex>
            </Fragment>
          </Flex>
        </HeaderShade>
      </HeaderShadow>
    </HeaderContainer>
  );
};

export default Header;
