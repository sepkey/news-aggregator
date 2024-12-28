export function removeFalsyValues(
  obj: Record<string, string | number | null | undefined>
): Record<string, string | number> {
  return Object.fromEntries(
    Object.entries(obj).filter(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_, value]) => value !== null && value !== undefined && value !== ''
    )
  ) as Record<string, string | number>;
}

export const truncate = (str: string, maxLength: number, maxCut?: number) => {
  const firstPeriodIndex = str.indexOf('.');
  return str.length > maxLength
    ? str.substring(0, maxCut || firstPeriodIndex + 1) + ' ...'
    : str;
};
