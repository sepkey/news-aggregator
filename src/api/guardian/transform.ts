import { Article } from "@/lib/types";
import { TheGuardianDto } from "./dto";

export function dtoToArticle(dto: TheGuardianDto): Article {
  return {
    title: dto.webTitle,
    url: dto.webUrl,
    id: dto.id,
    publishedAt: dto.webPublicationDate ?? "",
    source: dto.sectionName ?? "",
    description: "",
    image: "",
    author: "",
  };
}
