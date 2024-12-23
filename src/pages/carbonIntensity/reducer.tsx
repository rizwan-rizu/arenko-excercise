import { Dayjs } from "dayjs";
import { ActionTypes } from "./action";

export interface State {
  from: Dayjs | null;
  to: Dayjs | null;
  isChartLoading: boolean | null;
  xValues: (string | null)[];
  forecastValues: (number | null)[];
  actualValues: (number | null)[];
  error: string | null;
  intensityType: string;
}

export type Action =
  | { type: ActionTypes.FROM; payload: Dayjs | null }
  | { type: ActionTypes.TO; payload: Dayjs | null }
  | { type: ActionTypes.CHART_LOADING; payload: boolean }
  | {
    type: ActionTypes.DATA;
    payload: { xValues: State["xValues"]; forecastValues: State["forecastValues"]; actualValues: State["actualValues"] };
  }
  | { type: ActionTypes.ERROR; payload: string | null }
  | { type: ActionTypes.INTENSITY_TYPE; payload: string };

export const initialState: State = {
  from: null,
  to: null,
  isChartLoading: null,
  intensityType: "both",
  xValues: [],
  forecastValues: [],
  actualValues: [],
  error: null,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.FROM:
      return { ...state, from: action.payload };
    case ActionTypes.TO:
      return { ...state, to: action.payload };
    case ActionTypes.CHART_LOADING:
      return { ...state, isChartLoading: action.payload };
    case ActionTypes.DATA:
      const { xValues, forecastValues, actualValues } = action.payload;
      return { ...state, xValues, forecastValues, actualValues };
    case ActionTypes.ERROR:
      return { ...state, isChartLoading: false, error: action.payload };
    case ActionTypes.INTENSITY_TYPE:
      return { ...state, intensityType: action.payload };
    default:
      return state;
  }
};
