import type { NextPage } from 'next';
import { MdDeleteOutline, MdOutlineMode } from 'react-icons/md';
import { Header } from '../components/Header';
import { InputSearch } from '../components/InputSearch';
import { Tag } from '../components/Tag';
import { Container, ContainerTags } from './styles';

const Home: NextPage = function () {
  return (
    <>
      <Header title="Empreendimentos" />
      <InputSearch />
      <Container>
        <li>
          <div className="section-text">
            <div>
              <strong>Villega Vila Velha</strong> <MdOutlineMode />
              <MdDeleteOutline />
            </div>
            <span>Rua Dório Silva, 100 - Vila Guaranhuns, Vila Velha</span>
          </div>
          <ContainerTags>
            <Tag text="Lançamento" />
            <Tag text="Residencial" />
          </ContainerTags>
        </li>
      </Container>
    </>
  );
};

export default Home;
