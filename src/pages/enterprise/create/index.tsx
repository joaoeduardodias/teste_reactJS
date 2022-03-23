import type { NextPage } from 'next';
import { Header } from '../../../components/Header';
import { Input } from '../../../components/Input';
import { Select } from '../../../components/Select';
import { Address, Container, Content } from './styles';

const createEnterprise: NextPage = function () {
  return (
    <>
      <Header title="Cadastro de Empreendimento" />
      <Container>
        <Content>
          <h2>Informações</h2>
          <Select name="releases">
            <option value="short_release">Breve Lançamento</option>
            <option value="launch">Lançamento</option>
            <option value="in_Works">Em obras</option>
            <option value="ready_to_live">Pronto para morar</option>
          </Select>
          <Input name="name" placeholder="Nome do Empreendimento" />
          <Select name="residential">
            <option value="residential">Residencial</option>
            <option value="commercial">Comercial</option>
          </Select>
          <Input name="zip_code" placeholder="Cep" />
          <Address>
            <span>Rua Doutor Messuti,</span> <span>Vila Bastos</span>
            <span>Santo André </span> <span>SP</span>
          </Address>
          <Input type="number" name="number" placeholder="Número" />
          <button type="submit">Cadastrar</button>
        </Content>
      </Container>
    </>
  );
};

export default createEnterprise;
