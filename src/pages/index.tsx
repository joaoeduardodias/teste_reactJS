import type { NextPage } from 'next';
import Link from 'next/link';
import { MdDeleteOutline, MdOutlineMode } from 'react-icons/md';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { InputSearch } from '../components/InputSearch';
import { Tag } from '../components/Tag';
import { Container, ContainerTags, Content } from './styles';

const Home: NextPage = function () {
  async function handleDeleteEnterprise(id: string): Promise<void> {
    // eslint-disable-next-line no-promise-executor-return
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(id);
  }

  return (
    <>
      <Header title="Empreendimentos" />
      <InputSearch />
      <Container>
        <Content>
          <li>
            <div className="section-text">
              <div>
                <strong>Villega Vila Velha</strong>
                <Link href="/enterprise/edit?1" passHref>
                  <MdOutlineMode />
                </Link>
                <MdDeleteOutline onClick={() => handleDeleteEnterprise('1a')} />
              </div>
              <span>Rua Dório Silva, 100 - Vila Guaranhuns, Vila Velha</span>
            </div>
            <ContainerTags>
              <Tag text="Lançamento" />
              <Tag text="Residencial" />
            </ContainerTags>
          </li>
        </Content>
        <Button name="Carregar mais" />
      </Container>
    </>
  );
};

export default Home;
