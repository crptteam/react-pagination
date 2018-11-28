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

  if (pages === null || pages === undefined) { return null; }

  const pageList = [];
  if (pages < 6) {
    for (let i = 1; i < pages + 1; i++) {
      pageList.push(<PageNumber key={i} number={i} isActive={value === i} />);
    }
  } else {
    if (value < 4) {
      pageList.push(<PageNumber key="1" number={1} isActive={value === 1} />);
      pageList.push(<PageNumber key="2" number={2} isActive={value === 2} />);
      pageList.push(<PageNumber key="3" number={3} isActive={value === 3} />);
      pageList.push(<Separator key="4" />);
      pageList.push(<PageNumber key="5" number={pages} />);
    } else if (value > pages - 2)  {
      pageList.push(<PageNumber key="1" number={1} />);
      pageList.push(<Separator key="2" />);
      pageList.push(<PageNumber key="3" number={pages - 2} isActive={value === pages - 2} />);
      pageList.push(<PageNumber key="4" number={pages - 1} isActive={value === pages - 1} />);
      pageList.push(<PageNumber key="5" number={pages} isActive={value === pages} />);
    } else {
      pageList.push(<PageNumber key="1" number={1}/>);
      pageList.push(<Separator key="2" />);
      pageList.push(<PageNumber key="3" number={value} isActive />);
      pageList.push(<Separator key="4" />);
      pageList.push(<PageNumber key="5" number={pages} />);
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
