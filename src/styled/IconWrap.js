import React from 'react';
import styled from 'styled-components';

const IconWrap = styled.div`
  ${props => props.disabled ? 'color: #C4C4C4;' : ''}
  display: inline-flex;
  visibility: ${props => props.hidden ? 'hidden' : 'visible'};
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  cursor: pointer;
`;

export default IconWrap;
