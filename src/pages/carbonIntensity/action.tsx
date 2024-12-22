import dayjs, { Dayjs } from "dayjs";
import { IntensityData } from "./index";
import { State } from "./reducer";

export const FROM = "from";
export const TO = "to";
export const CHART_LOADING = "chartLoading";
export const DATA = "data";

interface SetFromDateAction {
  type: typeof FROM;
  payload: Dayjs;
}

interface SetToDateAction {
  type: typeof TO;
  payload: Dayjs;
}

interface SetIntensityDataAction {
  type: typeof DATA;
  payload: {
    xValues: State["xValues"];
    forecastValues: State["forecastValues"];
    actualValues: State["actualValues"];
  };
}


export const setFromDate = (date: Dayjs): SetFromDateAction => {
  return {
    type: FROM,
    payload: date
  }
}

export const setToDate = (date: Dayjs): SetToDateAction => {
  return {
    type: TO,
    payload: date
  }
}

export const setIntensityData = (data: IntensityData[]): SetIntensityDataAction => {

  const xValues = data.map((item) => dayjs(item.from).format("YYYY-MM-DD HH:mm"));
  const forecastValues = data.map((item) => item.intensity.forecast);
  const actualValues = data.map((item) => item.intensity.actual);

  return {
    type: DATA,
    payload: {
      xValues,
      forecastValues,
      actualValues
    }
  }
}