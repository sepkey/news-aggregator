import { theGuardianClient } from '../client';
import type { TheGuardianDto } from './dto';
import { dtoToArticle } from './transform';

type Response = {
  response: {
    results: TheGuardianDto[];
  };
};

export async function getTheGuardianSearch(
  params?: Record<string, string | number>
) {
  const response = await theGuardianClient.get<Response>('/search', { params });
  return response.data.response.results.map((item: TheGuardianDto) =>
    dtoToArticle(item)
  );
}

export async function getTheGuardianSections() {
  const response = await theGuardianClient.get<Response>('/sections');
  return response.data.response.results.map((itm) => ({
    value: itm.id,
    label: itm.webTitle,
  }));
}
