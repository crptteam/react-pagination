import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.input`
  js-display: inline-flex;
  display: inline-flex;
  border: ${props => props.border};
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight};
  margin-left: 7px;
  margin-right: 7px;
  outline: 0;
  width: ${props => props.width};
  box-sizing: border-box;
  height: ${props => props.height};
  text-align: center;
  user-select: text;
`;

const PageInput = props => {
  const theme = getThemeAsPlainTextByKeys(
    props.theme || defaultTheme,
    props.disabled ? 'disabled' : 'main'
  );

  return <Elem {...theme} {...props} />;
};

export default PageInput;
