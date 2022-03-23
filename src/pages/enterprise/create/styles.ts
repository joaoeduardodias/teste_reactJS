import styled from 'styled-components';

export const Container = styled.main`
  height: calc(100vh - 5rem);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.form`
  width: 38.8rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: var(--bg-white);
  border-radius: 8px;
  h2 {
    color: var(--textcolor-primary);
    font-weight: 700;
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }

  button {
    background-color: var(--brandcolor-primary-default);
    width: 9.93rem;
    margin: 0 auto;
    padding: 10px 40px;
    color: var(--bg-white);
    border-radius: 71px;
    font-weight: 700;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        font-size: 1.5rem;
        margin-left: 0.4rem;
        color: var(--bg-white);
      }
    }
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: initial;
  margin-top: 2.625rem;
  margin-bottom: 1.5rem;
`;
