import { format } from "date-fns";

export const dateToGuardianFormat = (date: Date | undefined): string => {
  if (!date) return "";
  //   return date.toISOString().split("T")[0];
  return format(date, "yyyy-MM-dd");
};

export const dateToNyTimesFormat = (date: Date | undefined): string => {
  if (!date) return "";
  return format(date, "yyyyMMdd");
};
