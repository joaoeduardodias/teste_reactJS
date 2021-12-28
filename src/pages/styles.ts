import styled from 'styled-components';

export const Container = styled.ul`
  max-width: 71.25rem;
  margin: 5.5rem auto 0;
  list-style: none;
  li {
    width: 100%;
    height: 7.125rem;
    background: var(--bg-white);
    box-shadow: 0px 2px 4px rgba(48, 46, 69, 0.06);
    border-radius: 8px;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .section-text {
      display: flex;
      flex-direction: column;
      strong {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--textcolor-primary);
        margin-right: 1rem;
      }
      svg {
        color: var(--brandcolor-primary-default);
        font-size: 1.5rem;
        cursor: pointer;
      }
      span {
        color: var(--textcolor-secondary);
        font-size: 0.8rem;
        margin-top: 1rem;
      }
    }
  }
`;

export const ContainerTags = styled.div`
  display: flex;
  align-items: center;
  button + button {
    margin-left: 1rem;
  }
`;
