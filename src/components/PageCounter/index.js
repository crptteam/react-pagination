import React from 'react';
import PropTypes from 'prop-types';

import SimplyPageCounter from './SimplyPageCounter';
import SeparatedPageCounter from './SeparatedPageCounter';


const propTypes = {
  isSeparatedPageCounter: PropTypes.bool,
};

const defaultProps = {
  isSeparatedPageCounter: false,
};

const PageCounter = ({ isSeparatedPageCounter, ...otherProps }) => (
  isSeparatedPageCounter
  ? <SeparatedPageCounter {...otherProps} />
  : <SimplyPageCounter {...otherProps} />
);

PageCounter.propTypes = propTypes;
PageCounter.defaultProps = defaultProps;
export default PageCounter;
