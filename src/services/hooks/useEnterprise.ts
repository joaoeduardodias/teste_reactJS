import { useQuery, UseQueryResult } from 'react-query';
import { api } from '../api';

type Enterprise = {
  id: string;
  name: string;
  status: string;
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

interface getEnterprisesResponse {
  enterprises: Enterprise[];
}
const limitData = 5;

export async function getEnterprises(
  page: number
): Promise<getEnterprisesResponse> {
  const { data } = await api.get(
    `/?_page=${page}&_limit=${limitData}&_sort=name`
  );

  const enterprises = data.map((enterprise: Enterprise) => {
    return {
      // eslint-disable-next-line no-underscore-dangle
      id: enterprise.id,
      name: enterprise.name,
      purpose: enterprise.purpose,
      ri_number: enterprise.ri_number,
      status: enterprise.status,
      address: {
        cep: enterprise.address.cep,
        city: enterprise.address.city,
        district: enterprise.address.district,
        number: enterprise.address.number,
        state: enterprise.address.state,
        street: enterprise.address.street,
      },
    };
  });

  return {
    enterprises,
  };
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useEnterprises(page: number, options: any) {
  return useQuery(['enterprises', page], () => getEnterprises(page), {
    staleTime: 1000 * 60 * 30, // 30 minutes
    ...options,
  }) as UseQueryResult<getEnterprisesResponse, unknown>;
}
