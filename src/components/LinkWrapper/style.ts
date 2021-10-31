import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100;
  top: 1.5rem;
  right: 1.5rem;
  color: white;
  cursor: pointer;

  svg {
    transition: 0.3s;
  }

  span {
    margin-right: 8px;
  }

  &:hover {
    border-bottom: 2px solid #eeeeee;
  }
`;
