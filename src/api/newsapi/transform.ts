import { Article } from "@/lib/types";
import { NewsApiDto } from "./dto";

export function dtoToNewsApi(dto: NewsApiDto): Article {
  return {
    title: dto.title,
    description: dto.description ?? "",
    image: dto.urlToImage ?? "",
    author: dto.author ?? "",
    publishedAt: dto.publishedAt ?? "",
    source: dto.source.name ?? "",
    url: dto.url,
    id: crypto.randomUUID() as string,
  };
}
