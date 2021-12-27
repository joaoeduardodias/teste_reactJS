import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 2px solid var(---border-divider);
  width: 71.25rem;
  height: 3.25rem;
  margin: 0 auto;
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.2rem;
  }
  input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    padding-left: 0.8rem;
    color: var(--textcolor-primary);
    font-size: 1rem;
    &::placeholder {
      color: var(--textcolor-primary);
    }
  }
`;
