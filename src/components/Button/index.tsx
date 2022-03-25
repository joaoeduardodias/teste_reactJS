import { ReactNode } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>;
  name: string;
  children?: ReactNode;
  onPageNext?: () => void;
}

export function Button({
  name,
  icon: Icon,
  children,
  onPageNext,
}: ButtonProps): JSX.Element {
  return (
    <Container onClick={onPageNext}>
      {name}
      {Icon && <Icon size={22} color="#FFF" />}
      {children}
    </Container>
  );
}
