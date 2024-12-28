import { newsApiClient } from '../client';
import type { NewsApiDto } from './dto';
import { dtoArticle } from './transform';

type Response = { articles: NewsApiDto[] };

export async function getNewsApiTopHeadline(
  params: Record<string, string | number>
) {
  const response = await newsApiClient.get<Response>('/top-headlines', {
    params,
  });
  return response.data.articles.map((item: NewsApiDto) => dtoArticle(item));
}
