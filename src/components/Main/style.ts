import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  background: #111;
  height: 6rem;

  h1 {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 > svg {
    color: white;
    font-size: 3rem;
  }
`;
