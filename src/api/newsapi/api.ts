import { newsApiClient } from "../client";
import { NewsApiDto } from "./dto";
import { dtoToNewsApi } from "./transform";

export async function getNewsApi(params: Record<string, string | number>) {
  const response = await newsApiClient.get<{ articles: NewsApiDto[] }>("", {
    params,
  });
  return response.data.articles.map((item: NewsApiDto) => dtoToNewsApi(item));
}
