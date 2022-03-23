import styled from 'styled-components';

export const Container = styled.input`
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
`;
