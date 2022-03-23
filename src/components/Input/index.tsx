import { Container } from './styles';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  name: string;
  type?: string;
  placeholder: string;
}

export function Input({
  name,
  placeholder,
  type = 'text',
}: InputProps): JSX.Element {
  return (
    <Container type={type} name={name} id={name} placeholder={placeholder} />
  );
}
