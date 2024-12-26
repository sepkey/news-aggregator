import { theGuardianClient } from "../client";
import { TheGuardianDto } from "./dto";
import { dtoToArticle } from "./transform";

type Response = {
  response: {
    results: TheGuardianDto[];
  };
};

export async function getTheGuardian(params?: Record<string, string | number>) {
  const response = await theGuardianClient.get<Response>("", { params });
  return response.data.response.results.map((item: TheGuardianDto) =>
    dtoToArticle(item)
  );
}
