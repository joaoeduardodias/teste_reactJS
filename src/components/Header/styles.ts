import styled from 'styled-components';

export const Container = styled.header`
  background: var(--bg-white);
  height: 5rem;
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1140px;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font: 700 1.5rem 'Montserrat';
    color: var(--brandcolor-primary-default);
    cursor: pointer;
  }
  > a {
    button {
      width: 2rem;
      font-size: 0.9rem;
      svg {
        display: none;
      }
    }
  }
`;
