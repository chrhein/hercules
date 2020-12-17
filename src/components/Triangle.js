import styled from 'styled-components';

const Triangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  z-index: -2;

  ${(props) => {
    const border = `${props.width[0]} solid transparent;`;
    return props.invertX
      ? `border-left: ${border}; right: 0;`
      : `border-right: ${border};`;
  }}

  @media (min-width: 768px) and (min-width: 1199px) {
    ${(props) => {
      const color = props.theme.colors[props.color] || props.color;
      const border = `${props.height[0]} solid ${color};`;
      return props.invertY
        ? `border-bottom: ${border}; bottom: 0;`
        : `border-top: ${border};`;
    }}
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    ${(props) => {
      let color = props.theme.colors[props.color] || props.color;
      /*
      if (props.id == 'backgroundDarkOnTablet') {
        color = props.theme.colors['backgroundDark'] || 'backgroundDark';
      } else if (props.id == 'secondaryLightOnTablet') {
        color = props.theme.colors['secondaryLight'] || 'secondaryLight';
      } else if (props.id == 'secondaryLightOnTabletAndMobile') {
        color = props.theme.colors['secondaryLight'] || 'secondaryLight';
      } else {
        color = props.theme.colors[props.color] || props.color;
      }
      
       */
      const border = `${props.height[0]} solid ${color};`;
      return props.invertY
        ? `border-bottom: ${border}; bottom: 0;`
        : `border-top: ${border};`;
    }}
  }

  @media (max-width: 767px) {
    ${(props) => {
      let color = props.theme.colors[props.color] || props.color;
      /*
      if (props.id == 'secondaryLightOnTabletAndMobile') {
        color = props.theme.colors['secondaryLight'] || 'secondaryLight';
      } else if (props.id == 'backgroundDarkOnTablet') {
        color = props.theme.colors['backgroundDark'] || 'backgroundDark';
      } else {
        color = props.theme.colors[props.color] || props.color;
      }
      
       */
      const border = `${props.height[0]} solid ${color};`;
      return props.invertY
        ? `border-bottom: ${border}; bottom: 0;`
        : `border-top: ${border};`;
    }}
  }

  @media only screen and (min-width: 768px) {
    ${(props) => {
      const height = props.height[1];
      return props.invertY
        ? `border-bottom-width: ${height};`
        : `border-top-width: ${height};`;
    }}

    ${(props) => {
      const width = props.width[1];
      return props.invertX
        ? `border-left-width: ${width};`
        : `border-right-width: ${width};`;
    }};
  }
`;

export default Triangle;
