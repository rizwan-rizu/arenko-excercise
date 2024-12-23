import { Dayjs } from "dayjs";
import { CHART_LOADING, DATA, ERROR, FROM, INTENSITY_TYPE, TO } from "./action";

export interface State {
  from: Dayjs | null;
  to: Dayjs | null;
  isChartLoading: boolean | null
  xValues: (string | null)[]
  forecastValues: (number | null)[]
  actualValues: (number | null)[]
  error: string | null
  intensityType: string
}

type Action =
  | { type: "from"; payload: Dayjs | null }
  | { type: "to"; payload: Dayjs | null }
  | { type: "chartLoading", payload: boolean }
  | {
    type: 'data';
    payload: { xValues: State["xValues"], forecastValues: State["forecastValues"], actualValues: State["actualValues"] }
  }
  | { type: 'error', payload: string | null }
  | { type: "intensityType", payload: string };

export const initialState: State = {
  from: null,
  to: null,
  isChartLoading: null,
  intensityType: "both",
  xValues: [],
  forecastValues: [],
  actualValues: [],
  error: null
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case FROM:
      return { ...state, from: action.payload };
    case TO:
      return { ...state, to: action.payload };
    case CHART_LOADING:
      return { ...state, isChartLoading: action.payload }
    case DATA:
      return { ...state, ...action.payload }
    case ERROR:
      return { ...state, isChartLoading: false, error: action.payload }
    case INTENSITY_TYPE:
      return { ...state, intensityType: action.payload }
  }
}