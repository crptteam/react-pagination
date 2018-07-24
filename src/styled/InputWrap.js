import React from 'react';
import styled from 'styled-components';
import {getThemeAsPlainTextByKeys, innerMerge} from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
  js-display: flex;
  display: flex;
  min-width: ${props => props.minWidth};
  width: ${props => props.width};
  margin-left: 7px;
  margin-right: 7px;
`;

const InputWrap = props => {
  const merged = innerMerge(
    {},
    defaultTheme.Pagination,
    (props.theme && props.theme.Pagination) || {}
  );

  const theme = getThemeAsPlainTextByKeys(
    merged,
    props.disabled ? "disabled" : "main"
  );

  return <Elem {...theme} {...props} />;
};

export default InputWrap;