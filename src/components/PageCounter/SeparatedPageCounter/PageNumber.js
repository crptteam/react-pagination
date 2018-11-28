import React from 'react';
import PropTypes from 'prop-types';

import { ActiveWrapper, Wrapper } from '../../../styled/PageWrapper';


const propTypes = {
  isActive: PropTypes.bool,
  number: PropTypes.number.isRequired,
};

const defaultProps = {
  isActive: false,
}

const PageNumber = ({ isActive, number }) => {
  const PageWrapper = isActive ? ActiveWrapper : Wrapper;

  return (
    <PageWrapper>
      <div>{number}</div>
    </PageWrapper>
  );
};

PageNumber.propTypes = propTypes;
PageNumber.defaultProps = defaultProps;

export default PageNumber;
