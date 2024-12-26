import { newsApiClient } from "../client";
import { NewsApiDto } from "./dto";
import { dtoArticle } from "./transform";

type Response = { articles: NewsApiDto[] };

export async function getNewsApi(params: Record<string, string | number>) {
  const response = await newsApiClient.get<Response>("", {
    params,
  });
  return response.data.articles.map((item: NewsApiDto) => dtoArticle(item));
}
