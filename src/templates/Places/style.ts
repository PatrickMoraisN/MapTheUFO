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

export const Section = styled.section`
  padding: 3rem 20rem;

  h1 {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 3rem;
    margin-bottom: 2rem;
  }
`;

export const Gallery = styled.div`
  img {
    & + img {
      margin-bottom: 4rem;
    }
  }

  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 17rem;
`;
