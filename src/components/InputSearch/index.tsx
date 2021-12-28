import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export function InputSearch(): JSX.Element {
  return (
    <Container>
      <MdSearch />
      <input type="text" placeholder="Buscar" />
    </Container>
  );
}
