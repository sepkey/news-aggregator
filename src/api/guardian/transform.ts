import type { Article } from '@/lib/types';
import type { TheGuardianDto } from './dto';

export function dtoToArticle(dto: TheGuardianDto): Article {
  return {
    title: dto.webTitle,
    url: dto.webUrl,
    id: dto.id,
    publishedAt: dto.webPublicationDate,
    category: dto.sectionName,
    description: '',
    image: '',
    author: '',
  };
}
