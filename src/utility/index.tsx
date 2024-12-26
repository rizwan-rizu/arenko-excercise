import dayjs, { Dayjs } from "dayjs";
import { setError } from "../pages/carbonIntensity/action";
import { Dispatch } from "react";
import { Action } from "../pages/carbonIntensity/reducer";

export enum roles {
  ALL = "ALL",
}

export const isValidDateRange = (from: Dayjs | null, to: Dayjs | null, dispatch: Dispatch<Action>): boolean => {
  if (!from || !to) return false;

  const isFromBeforeTo = from.isBefore(to);
  const isFromInPast = from.isBefore(dayjs());
  const isToInPast = to.isBefore(dayjs());
  const isRangeWithin14Days = to.diff(from, "day") <= 14;

  dispatch(setError(null))

  if (!isFromBeforeTo) {
    dispatch(setError("Invalid date: Ensure from date is before to date. "))
    return false;
  }
  if (!isFromInPast || !isToInPast) {
    dispatch(setError("Invalid date: Ensure the dates (from & to) are in the past. "))
    return false;
  }
  if (!isRangeWithin14Days) {
    dispatch(setError("Invalid date range: Ensure there is at most 14 day range. "))
    return false;
  }

  return true;
};