/* eslint-disable react/jsx-no-useless-fragment */
import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { MdDeleteOutline, MdOutlineMode } from 'react-icons/md';
import { useMutation } from 'react-query';
import Swal from 'sweetalert2';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { InputSearch } from '../components/InputSearch';
import { Tag } from '../components/Tag';
import { api } from '../services/api';
import {
  getEnterprises,
  // eslint-disable-next-line prettier/prettier
  useEnterprises
} from '../services/hooks/useEnterprise';
import { queryClient } from '../services/queryClient';
import { Container, ContainerTags, Content } from '../styles/home';
import { Toast } from './_app';

const Home: NextPage = function ({ enterprises }: any) {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useEnterprises(page, {
    initialData: enterprises,
  });
  const deleteEnterprise = useMutation(
    async enterprise => {
      const response = await api.delete(`/${enterprise}`);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('enterprises');
      },
    }
  );

  async function handlePrefetchEnterprise(enterpriseId: string): Promise<any> {
    await queryClient.prefetchQuery(
      ['enterprise', enterpriseId],
      async () => {
        const response = await api.get(`?id=${enterpriseId}`);

        return response.data[0];
      },
      {
        staleTime: 1000 * 60 * 10, // 10 minutos
      }
    );
  }

  async function handleDeleteEnterprise(enterpriseId: any): Promise<void> {
    Swal.fire({
      title: 'Apagar empreendimento ?',
      text: 'Deseja apagar esse empreendimento ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4F46BB',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar',
    }).then(result => {
      if (result.isConfirmed) {
        deleteEnterprise.mutateAsync(enterpriseId, {});
        Toast.fire({
          icon: 'success',
          title: 'Empreendimento editado com sucesso!',
        });
      }
    });
  }

  function handleNextEnterprises(): void {
    setPage(page + 1);
    console.log(data);
  }

  return (
    <>
      <Header title="Empreendimentos" />
      <InputSearch />
      <Container>
        <Content>
          {isLoading ? (
            <h1>Carregando...</h1>
          ) : error ? (
            <h1>Erro encontrado!</h1>
          ) : (
            <>
              {data?.enterprises.map(enterprise => (
                <li key={enterprise.id}>
                  <div className="section-text">
                    <div>
                      <strong>{enterprise.name}</strong>
                      <Link
                        href={`/enterprise/edit?id=${enterprise.id}`}
                        passHref
                      >
                        <a>
                          <MdOutlineMode
                            onMouseEnter={() =>
                              handlePrefetchEnterprise(enterprise.id)
                            }
                          />
                        </a>
                      </Link>
                      <MdDeleteOutline
                        onClick={() => handleDeleteEnterprise(enterprise.id)}
                      />
                    </div>

                    <span>
                      {`${enterprise.address.street}, ${enterprise.address.number} - ${enterprise.address.district}, ${enterprise.address.city}`}
                    </span>
                  </div>

                  <ContainerTags>
                    {enterprise.status === 'RELEASE' && (
                      <Tag text="Lançamento" />
                    )}
                    {enterprise.status === 'SHORT_RELEASE' && (
                      <Tag text="Breve Lançamento" />
                    )}
                    {enterprise.status === 'IN_WORKS' && (
                      <Tag text="Em obras" />
                    )}
                    {enterprise.status === 'READY_TO_LIVE' && (
                      <Tag text="Pronto para morar" />
                    )}
                    {enterprise.purpose === 'HOME' && (
                      <Tag text="Residencial" />
                    )}
                    {enterprise.purpose === 'COMMERCIAL' && (
                      <Tag text="Comercial" />
                    )}
                  </ContainerTags>
                </li>
              ))}
            </>
          )}
        </Content>
        <Button name="Carregar mais" onPageNext={handleNextEnterprises} />
      </Container>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const enterprises = await getEnterprises(1);

  return {
    props: {
      enterprises,
    },
  };
};
