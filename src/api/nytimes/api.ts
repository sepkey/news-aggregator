import { nyTimesClient } from '../client';
import type { NyTimesDTO } from './dto';
import { dtoToArticle } from './transform';

type Response = {
  response: {
    docs: NyTimesDTO[];
  };
};

export async function getNyTimes(params?: Record<string, string | number>) {
  const response = await nyTimesClient.get<Response>('', {
    params,
  });
  return response.data.response.docs.map((item: NyTimesDTO) =>
    dtoToArticle(item)
  );
}
