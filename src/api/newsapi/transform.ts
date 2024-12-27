import type { Article } from '@/lib/types';
import type { NewsApiDto } from './dto';

export function dtoArticle(dto: NewsApiDto): Article {
  return {
    title: dto.title,
    description: dto.description ?? 'No description',
    image: dto.urlToImage ?? '',
    author: dto.author ?? '',
    publishedAt: dto.publishedAt,
    source: dto.source.name ?? '',
    url: dto.url,
    id: crypto.randomUUID() as string,
  };
}
