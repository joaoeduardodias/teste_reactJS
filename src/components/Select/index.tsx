import { ReactNode } from 'react';
import { Container } from './styles';

interface SelectProps {
  children: ReactNode;
  name: string;
}

export function Select({ children, name }: SelectProps): JSX.Element {
  return (
    <Container name={name} id={name}>
      {children}
    </Container>
  );
}
