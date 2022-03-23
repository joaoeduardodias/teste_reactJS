import Link from 'next/link';
import { MdChevronLeft } from 'react-icons/md';
import { Container } from './styles';

interface ButtonHomeLinkProps {
  title: string;
}

export function ButtonHomeLink({ title }: ButtonHomeLinkProps): JSX.Element {
  return (
    <Link href="/">
      <Container>
        <MdChevronLeft /> <h1>{title}</h1>
      </Container>
    </Link>
  );
}
