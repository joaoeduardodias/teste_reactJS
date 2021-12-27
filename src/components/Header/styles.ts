import styled from 'styled-components';

export const Container = styled.header`
  background: var(--bg-white);
  height: 5rem;
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1120px;
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
  button {
    background-color: var(--brandcolor-primary-default);
    padding: 10px 40px;
    color: var(--bg-white);
    border-radius: 71px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 1.5rem;
      margin-left: 0.4rem;
      color: var(--bg-white);
    }
  }
`;
