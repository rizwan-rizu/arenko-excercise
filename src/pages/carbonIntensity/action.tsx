import dayjs, { Dayjs } from "dayjs";
import { IntensityData } from "./index";
import { State } from "./reducer";

export const FROM = "from";
export const TO = "to";
export const CHART_LOADING = "chartLoading";
export const DATA = "data";
export const ERROR = "error";
export const INTENSITY_TYPE = "intensityType";

interface SetFromDateAction {
  type: typeof FROM;
  payload: Dayjs;
}

interface SetToDateAction {
  type: typeof TO;
  payload: Dayjs;
}

interface SetErrorAction {
  type: typeof ERROR;
  payload: string | null;
}

interface SetChartLoadingAction {
  type: typeof CHART_LOADING;
  payload: boolean;
}

interface SetIntensityTypeAction {
  type: typeof INTENSITY_TYPE;
  payload: string;
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

export const setChartLoading = (value: boolean): SetChartLoadingAction => {
  return {
    type: CHART_LOADING,
    payload: value
  }
}

export const setError = (message: string | null): SetErrorAction => {
  return {
    type: ERROR,
    payload: message
  }
}

export const setIntensityType = (value: string): SetIntensityTypeAction => {
  return {
    type: INTENSITY_TYPE,
    payload: value
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