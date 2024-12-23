import axios from "axios";
import { setChartLoading, setError, setIntensityData } from "./action";
import dayjs, { Dayjs } from "dayjs";

export const fetchCarbonIntensity = async (
  from: Dayjs | null,
  to: Dayjs | null,
  dispatch: any,
) => {
  try {
    dispatch(setChartLoading(true))
    const res = await axios.get(`https://api.carbonintensity.org.uk/intensity/${dayjs(from).toISOString()}/${dayjs(to).toISOString()}`)
    if (res.status === 200) {
      dispatch(setIntensityData(res?.data?.data));
    }
    else dispatch(setError("Data fetch error: Failed to fetch data. Please try again."))
  } catch (error: any) {
    dispatch(setError(`Data fetch error: ${error.message}`))
  } finally {
    dispatch(setChartLoading(false))
  }
}