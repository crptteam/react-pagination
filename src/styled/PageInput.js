import React from "react";
import styled from "styled-components";

import { getThemeAsPlainTextByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

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
  outline: 0;
  min-width: ${props => props.minWidth};
  width: 100%;
  box-sizing: border-box;
  height: ${props => props.height};
  text-align: center;
  user-select: text;
`;

const PageInput = props => {
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

export default PageInput;
