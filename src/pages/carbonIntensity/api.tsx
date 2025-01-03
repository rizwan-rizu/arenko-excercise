import { setChartLoading, setError, setIntensityData } from "./action";
import dayjs, { Dayjs } from "dayjs";
import { Dispatch } from "react";
import { Action } from "./reducer";
import { apiService } from "../../apiService";

export const fetchCarbonIntensity = async (
  from: Dayjs | null,
  to: Dayjs | null,
  dispatch: Dispatch<Action>,
) => {
  try {
    dispatch(setChartLoading(true))
    const res = await apiService.get(`intensity/${dayjs(from).toISOString()}/${dayjs(to).toISOString()}`)
    if (res.status === 200) {
      dispatch(setIntensityData(res?.data?.data));
    }
    else dispatch(setError("Data fetch error: Failed to fetch data. Please try again."))
  } catch (error: unknown) {
    console.error("Error response:", error);
    dispatch(setError(`Data fetch error: ${error instanceof Error ? error.message : "An unknown error has occured"}`))
  } finally {
    dispatch(setChartLoading(false))
  }
}