import Link from 'next/link';
import { MdAdd } from 'react-icons/md';
import { Container, Content } from './styles';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps): JSX.Element {
  return (
    <Container>
      <Content>
        <Link href="/">
          <a>
            <h1>{title}</h1>
          </a>
        </Link>
        <button type="button">
          Adicionar <MdAdd />
        </button>
      </Content>
    </Container>
  );
}
