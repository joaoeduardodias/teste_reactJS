import _debounce from 'lodash.debounce';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Button } from '../../../components/Button';
import { Header } from '../../../components/Header';
import { Input, InputCep } from '../../../components/Input';
import { Select } from '../../../components/Select';
import { api, apiZipCode } from '../../../services/api';
import { Toast } from '../../_app';
import { Address, Container, Content } from './styles';

type Enterprise = {
  id: string;
  name: string;
  releases: string;
  purpose: string;
  ri_number: string;
  address: {
    district: string;
    city: string;
    street: string;
    state: string;
    number: string;
    cep: string;
  };
};
enum releasesEnum {
  short_release = 'short_release',
  launch = 'launch',
  in_Works = 'in_Works',
  ready_to_live = 'ready_to_live',
}
enum purposeEnum {
  residential = 'residential',
  commercial = 'commercial',
}
type FormInputs = {
  name: string;
  number: string;
  releases: releasesEnum | string;
  purpose: purposeEnum | string;
};
type Address = {
  street?: string;
  district?: string;
  city?: string;
  state?: string;
  cep?: string;
};
const EditEnterprise: NextPage = function () {
  const [enterprise, setEnterprise] = useState<Enterprise>();
  const [address, setAddress] = useState<Address>();
  const [zip_code, setZip_code] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async function getEnterprise(id: string) {
    useQuery(
      ['enterprise', id],
      async () => {
        const { data } = await api.get(`/${id}`);

        setEnterprise(data);
        setAddress({
          cep: data?.address.cep,
          city: data?.address.city,
          district: data?.address.district,
          state: data?.address.state,
          street: data?.address.street,
        });
        reset({
          name: data.name,
          number: data.address.number,
          purpose: data.purpose,
          releases: data.releases,
        });
        setZip_code(String(data?.address.cep));
      },
      {
        staleTime: 1000 * 60 * 30, // 30 minutes
      }
    );
  }

  // Pegar o id pelo query params
  getEnterprise('PA02');
  console.log(enterprise);

  // const editEnterprise = useMutation(
  //   async enterprise => {
  //     const response = await api.post('/', enterprise);
  //     return response.data;
  //   },
  //   {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries('enterprises');
  //     },
  //   }
  // );

  // debounce of search address

  function handleDebounceFn(inputValue: string): void {
    if (!inputValue || inputValue === ' ') {
      return;
    }

    const validationZip_code = /^[0-9]{8}$/;
    if (validationZip_code.test(inputValue.replace('-', ''))) {
      apiZipCode
        .get(`ws/${inputValue}/json`)
        .then(res => {
          if (!res.data.erro) {
            setAddress({
              cep: res.data.cep,
              city: res.data.localidade,
              district: res.data.bairro,
              state: res.data.uf,
              street: res.data.logradouro,
            });
          } else {
            Toast.fire({
              icon: 'error',
              title: 'Cep não encontrado!',
            });
          }
        })
        .catch(err => {
          Toast.fire({
            icon: 'error',
            title: `Erro encontrado!  ${err}`,
          });
        });
    }
  }
  const debounceFn = useCallback(_debounce(handleDebounceFn, 2000), []);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setZip_code(event.target.value);
    debounceFn(event.target.value);
  }

  async function handleEditEnterprise(): Promise<void> {
    console.log('ola');
  }

  return (
    <>
      <Header title="Editar Empreendimento" />
      <Container>
        <Content onSubmit={handleSubmit(handleEditEnterprise)}>
          <h2>Informações</h2>
          <Select {...register('releases')} error={errors.releases}>
            <option value="short_release">Breve Lançamento</option>
            <option value="release">Lançamento</option>
            <option value="in_Works">Em obras</option>
            <option value="ready_to_live">Pronto para morar</option>
          </Select>
          <Input
            placeholder="Nome do Empreendimento"
            {...register('name', { required: true })}
            error={errors.name}
          />
          <Select {...register('purpose')} error={errors.purpose}>
            <option value="home">Residencial</option>
            <option value="commercial">Comercial</option>
          </Select>
          <InputCep
            placeholder="Cep"
            name="zip_code"
            value={zip_code}
            onChange={handleChange}
          />
          <Address>
            {address?.street && <span>{`${address?.street}`}</span>}
            {address?.district && <span>{`${address?.district} `}</span>}
            {address?.city && <span>{`${address?.city} `}</span>}
            {address?.state && <span>{address?.state}</span>}
          </Address>
          <Input
            type="number"
            placeholder="Número"
            {...register('number', { required: true })}
            error={errors.number}
          />
          <Button type="submit" name="Editar" />
        </Content>
      </Container>
    </>
  );
};

export default EditEnterprise;
