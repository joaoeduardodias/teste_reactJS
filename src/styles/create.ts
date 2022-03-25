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

  @media (max-width: 430px) {
    width: 90%;
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: initial;
  margin-top: 2.625rem;
  margin-bottom: 1.5rem;
`;
