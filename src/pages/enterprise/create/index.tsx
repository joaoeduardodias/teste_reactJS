import type { NextPage } from 'next';
import { Header } from '../../../components/Header';
import { Address, Container, Content } from './styles';

const createEnterprise: NextPage = function () {
  return (
    <>
      <Header title="Cadastro de Empreendimento" />
      <Container>
        <Content>
          <h2>Informações</h2>
          <select name="releases" id="releases">
            <option value="short_release">Breve Lançamento</option>
            <option value="launch">Lançamento</option>
            <option value="in_Works">Em obras</option>
            <option value="ready_to_live">Pronto para morar</option>
          </select>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome do Empreendimento"
          />
          <select name="residential" id="residential">
            <option value="residential">Residencial</option>
            <option value="commercial">Comercial</option>
          </select>
          <input type="text" name="zip_code" id="zip_code" placeholder="Cep" />
          <Address>
            <span>Rua Doutor Messuti,</span> <span>Vila Bastos</span>
            <span>Santo André </span> <span>SP</span>
          </Address>
          <input type="number" name="number" id="number" placeholder="Número" />
          <button type="submit">Cadastrar</button>
        </Content>
      </Container>
    </>
  );
};

export default createEnterprise;
