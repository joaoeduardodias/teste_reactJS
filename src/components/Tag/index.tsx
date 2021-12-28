import { Container } from './styles';

interface TagProps {
  text: string;
}

export function Tag({ text }: TagProps): JSX.Element {
  return <Container>{text}</Container>;
}
