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
  select {
    border: 0;
    border-bottom: 2px solid var(--outline-gray-dark);
    background: none;
    outline: none;
    padding: 1rem 0;
    margin-bottom: 1.125rem;
    color: var(--textcolor-primary);
  }
  input {
    border: 0;
    border-bottom: 2px solid var(--outline-gray-dark);
    background: none;
    outline: none;
    padding: 1rem 0;
    margin-bottom: 1.125rem;
    &::placeholder {
      color: var(--textcolor-primary);
    }
    &[type='number'] {
      margin-bottom: 3.25rem;
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    }
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
