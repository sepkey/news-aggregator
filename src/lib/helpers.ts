import type { ApiFilters } from "./types";

export function getNewsApiParams(data: ApiFilters) {
  const params: Record<string, string | number> = { page: 1, pageSize: 10 };
  if (data?.queryNewsApi) params.q = data.queryNewsApi;
  if (data?.category) params.category = data.category;
  return params;
}

export function removeFalsyValues(
  obj: Record<string, string | number | null | undefined>
): Record<string, string | number> {
  return Object.fromEntries(
    Object.entries(obj).filter(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_, value]) => value !== null && value !== undefined && value !== ""
    )
  ) as Record<string, string | number>;
}
