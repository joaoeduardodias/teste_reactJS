import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1140px;
  margin: 0 auto;

  > button {
    margin: 0 auto;
  }
`;

export const Content = styled.ul`
  max-width: 71.25rem;
  width: 90%;
  margin: 5.5rem auto 3.6rem;
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
      justify-content: center;
      > div {
        display: flex;
        align-items: center;
        a {
          padding: 0;
          margin: 0;
        }
      }
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
    & + li {
      margin-top: 2rem;
    }
  }
`;

export const ContainerTags = styled.div`
  display: flex;
  align-items: center;
  div + div {
    margin-left: 1rem;
  }
`;
