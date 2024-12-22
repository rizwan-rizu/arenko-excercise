import { Container, Stack } from "@mui/material";
import { Dayjs } from "dayjs";
import { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import Template from "../template";
import DateTimeField from "../../commonComponents/dateTimeField";

const CarbonIntesity = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const body = () => (
    <Container>
      <Stack direction="row" spacing={2}>
        <DateTimeField label="From" handleChange={(value: Dayjs) => dispatch({ type: "from", payload: value })} />
        <DateTimeField label="To" handleChange={(value: Dayjs) => dispatch({ type: "to", payload: value })} />
      </Stack>
    </Container>
  )

  return <Template headerTitle="Carbon Intensity" body={body()} />
}

export default CarbonIntesity;