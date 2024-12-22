import { Dayjs } from "dayjs";
import { CHART_LOADING, DATA, FROM, TO } from "./action";

export interface State {
  from: Dayjs | null;
  to: Dayjs | null;
  isChartLoading: boolean
  xValues: (string | null)[]
  forecastValues: (number | null)[]
  actualValues: (number | null)[]
}

type Action =
  | { type: "from"; payload: Dayjs | null }
  | { type: "to"; payload: Dayjs | null }
  | { type: "chartLoading" }
  | {
    type: 'data';
    payload: { xValues: State["xValues"], forecastValues: State["forecastValues"], actualValues: State["actualValues"] }
  };

export const initialState: State = {
  from: null,
  to: null,
  isChartLoading: true,
  xValues: [],
  forecastValues: [],
  actualValues: []
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case FROM:
      return { ...state, from: action.payload };
    case TO:
      return { ...state, to: action.payload };
    case CHART_LOADING:
      return { ...state, isChartLoading: !state.isChartLoading }
    case DATA:
      return { ...state, ...action.payload }
  }
}