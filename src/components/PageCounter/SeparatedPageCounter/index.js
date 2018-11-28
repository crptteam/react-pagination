import React from 'react';
import PropTypes from 'prop-types';

import PageNumber from './PageNumber';
import Separator from './Separator';
import SeparatedPageCounterWrapper from '../../../styled/SeparatedPageCounterWrapper';


const propTypes = {
  theme: PropTypes.shape({}),
  value: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
};

const SeparatedPageCounter = (props) => {
  const { theme, value, pages } = props;
  console.log('props = ', props);

  if (pages === null || pages === undefined) { return null; }

  const pageList = [];
  if (pages < 6) {
    for (let i = 1; i < pages + 1; i++) {
      pageList.push(<PageNumber number={i} isActive={value === i} />);
    }
  } else {
    if (value < 4) {
      pageList.push(<PageNumber number={1} isActive={value === 1} />);
      pageList.push(<PageNumber number={2} isActive={value === 2} />);
      pageList.push(<PageNumber number={3} isActive={value === 3} />);
      pageList.push(<Separator />);
      pageList.push(<PageNumber number={pages} />);
    } else if (value > pages - 2)  {
      pageList.push(<PageNumber number={1} />);
      pageList.push(<Separator />);
      pageList.push(<PageNumber number={pages - 2} isActive={value === pages - 2} />);
      pageList.push(<PageNumber number={pages - 1} isActive={value === pages - 1} />);
      pageList.push(<PageNumber number={pages} isActive={value === pages} />);
    } else {
      pageList.push(<PageNumber number={1}/>);
      pageList.push(<Separator />);
      pageList.push(<PageNumber number={value} isActive />);
      pageList.push(<Separator />);
      pageList.push(<PageNumber number={pages} />);
    }
  }

  return (
    <SeparatedPageCounterWrapper>
      {pageList}
    </SeparatedPageCounterWrapper>
  )
};

SeparatedPageCounter.propTypes = propTypes;

export default SeparatedPageCounter;
