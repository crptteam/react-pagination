import styled from 'styled-components';
import { get } from 'lodash';


export const ActiveWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;  
  padding-bottom: 6px;
  width: ${props => get(props, 'theme.pagination.activePageNumber.width', '24px')};
  height: ${props => get(props, 'theme.pagination.activePageNumber.height', '24px')};
  color: ${props => get(props, 'theme.pagination.activePageNumber.color', '#434244')};

  border:
    ${props => get(props, 'theme.pagination.activePageNumber.borderWidth', '1px')}
    ${props => get(props, 'theme.pagination.activePageNumber.borderStyle', 'solid')}
    ${props => get(props, 'theme.pagination.activePageNumber.borderColor', '#434244')};
    
  border-radius: ${props => get(props, 'theme.pagination.activePageNumber.borderRadius', '4px')};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;  
  padding-bottom: 6px;
  width: ${props => get(props, 'theme.pagination.pageNumber.width', '24px')};
  height: ${props => get(props, 'theme.pagination.pageNumber.height', '24px')};
  color: ${props => get(props, 'theme.pagination.pageNumber.color', '#55B5E7')};
`;
