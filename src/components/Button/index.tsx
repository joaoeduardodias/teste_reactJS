import { ReactNode } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>;
  name: string;
  children?: ReactNode;
}

export function Button({
  name,
  icon: Icon,
  children,
}: ButtonProps): JSX.Element {
  return (
    <Container>
      {name}
      {Icon && <Icon size={22} color="#FFF" />}
      {children}
    </Container>
  );
}
