import React from 'react';
import PropTypes from 'prop-types';

import PageInput from '../../styled/PageInput';
import InputWrap from '../../styled/InputWrap';


const propTypes = {
  theme: PropTypes.shape({}),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.number,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyPress: PropTypes.func,
};

const defaultProps = {
  theme: {},
  value: 0,
  onChange: () => {},
  onBlur: () => {},
  onKeyPress: () => {},
};

const SimplyPageCounter = ({
 theme,
 value,
 width,
 onChange,
 onBlur,
 onKeyPress,
}) => (
  <InputWrap
    theme={theme}
    width={width + "px"}
  >
    <PageInput
      pattern="[0-9]*"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyPress={onKeyPress}
      theme={theme}
    />
  </InputWrap>
);

SimplyPageCounter.propTypes = propTypes;
SimplyPageCounter.defaultProps = defaultProps;

export default SimplyPageCounter;
