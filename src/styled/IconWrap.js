import React from 'react';
import styled from 'styled-components';

const IconWrap = styled.div`
  display: inline-flex;
  visibility: ${props => props.hidden ? 'hidden' : 'visible'};
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  cursor: pointer;
`;

export default IconWrap;
