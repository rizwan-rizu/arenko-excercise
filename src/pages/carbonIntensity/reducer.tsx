import { Dayjs } from "dayjs";

interface iState {
  from: Dayjs | null;
  to: Dayjs | null;
  type: "actual" | "forecasted" | null;
}

type iAction =
  | { type: "from"; payload: Dayjs | null }
  | { type: "to"; payload: Dayjs | null }
  | { type: "type"; payload: "actual" | "forecasted" | null };

export const reducer = (state: iState, action: iAction): iState => {
  switch (action.type) {
    case "from":
      return { ...state, from: action.payload };
    case "to":
      return { ...state, to: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const initialState: iState = { from: null, to: null, type: null };