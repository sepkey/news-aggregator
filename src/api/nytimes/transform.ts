import type { Article } from "@/lib/types";
import type { NyTimesDTO } from "./dto";

export function dtoToArticle(dto: NyTimesDTO): Article {
  return {
    title: dto.abstract || dto.snippet,
    url: dto.web_url,
    id: dto._id,
    publishedAt: dto.pub_date ?? "",
    source: dto.source ?? "",
    description: dto.lead_paragraph,
    image: "",
    author: dto.byline.person
      .map((author) => `${author.firstname} ${author.lastname}`)
      .join(","),
  };
}
