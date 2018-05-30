import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
  js-display: inline-flex;
  display: inline-flex;
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  align-items: center;
  margin-left: 21px;
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight};
  height: ${props => props.height};
`;

const TotalPagesWrap = props => {
  const theme = getThemeAsPlainTextByKeys(
    props.theme || defaultTheme,
    props.disabled ? 'disabled' : 'main'
  );

  return <Elem {...theme} {...props} />;
};

export default TotalPagesWrap;
