import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdAdd } from 'react-icons/md';
import { Button } from '../Button';
import { ButtonHomeLink } from '../ButtonHomeLink';
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
          <ButtonHomeLink title={title} />
        ) : (
          <h1>{title}</h1>
        )}

        {router.pathname === '/' && (
          <Link href="/enterprise/create" prefetch passHref>
            <a>
              <Button type="button" name="Adicionar" icon={MdAdd} />
            </a>
          </Link>
        )}
      </Content>
    </Container>
  );
}
