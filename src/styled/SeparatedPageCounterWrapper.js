import styled from 'styled-components';


const SeparatedPageCounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  & > :not(:first-child) {
    margin-left: 6px;
  };
`;

export default SeparatedPageCounterWrapper;
