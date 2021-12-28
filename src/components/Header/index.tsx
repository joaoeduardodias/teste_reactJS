import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdAdd, MdChevronLeft } from 'react-icons/md';
import { Container, Content } from './styles';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps): JSX.Element {
  const router = useRouter();

  return (
    <Container>
      <Content>
        {router.pathname !== '/' ? (
          <Link href="/">
            <a>
              <MdChevronLeft /> <h1>{title}</h1>
            </a>
          </Link>
        ) : (
          <h1>{title}</h1>
        )}

        {router.pathname === '/' && (
          <button type="button">
            <Link href="/addEnterprise" prefetch>
              <a>
                Adicionar <MdAdd />
              </a>
            </Link>
          </button>
        )}
      </Content>
    </Container>
  );
}
