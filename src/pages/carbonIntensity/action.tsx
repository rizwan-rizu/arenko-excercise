import dayjs, { Dayjs } from "dayjs";
import { State } from "./reducer";

export enum ActionTypes {
  FROM = "from",
  TO = "to",
  CHART_LOADING = "chartLoading",
  DATA = "data",
  ERROR = "error",
  INTENSITY_TYPE = "intensityType",
}

type PayloadAction<Type extends ActionTypes, Payload> = {
  type: Type;
  payload: Payload;
};

export const setFromDate = (date: Dayjs | null): PayloadAction<ActionTypes.FROM, Dayjs | null> => ({
  type: ActionTypes.FROM,
  payload: date,
});

export const setToDate = (date: Dayjs | null): PayloadAction<ActionTypes.TO, Dayjs | null> => ({
  type: ActionTypes.TO,
  payload: date,
});

export const setChartLoading = (value: boolean): PayloadAction<ActionTypes.CHART_LOADING, boolean> => ({
  type: ActionTypes.CHART_LOADING,
  payload: value,
});

export const setError = (message: string | null): PayloadAction<ActionTypes.ERROR, string | null> => ({
  type: ActionTypes.ERROR,
  payload: message,
});

export const setIntensityType = (value: string): PayloadAction<ActionTypes.INTENSITY_TYPE, string> => ({
  type: ActionTypes.INTENSITY_TYPE,
  payload: value,
});

export const setIntensityData = (
  data: { from: string; intensity: { forecast: number; actual: number } }[]
): PayloadAction<
  ActionTypes.DATA,
  { xValues: State["xValues"]; forecastValues: State["forecastValues"]; actualValues: State["actualValues"] }
> => ({
  type: ActionTypes.DATA,
  payload: {
    xValues: data.map((item) => dayjs(item.from).format("YYYY-MM-DD HH:mm")),
    forecastValues: data.map((item) => item.intensity.forecast),
    actualValues: data.map((item) => item.intensity.actual),
  },
});
