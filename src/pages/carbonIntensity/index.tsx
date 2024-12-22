import { CircularProgress, Container, Stack } from "@mui/material";
import { Dayjs } from "dayjs";
import { useEffect, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { CHART_LOADING, setFromDate, setIntensityData, setToDate } from "./action";
import Template from "../template";
import DateTimeField from "../../commonComponents/dateTimeField";
import axios from "axios";
import Chart from "../../commonComponents/chart";

export interface IntensityData {
  from: string;
  to: string;
  intensity: {
    forecast: number;
    actual: number;
    index: string;
  };
}

const CarbonIntesity = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { xValues, forecastValues, actualValues } = state;

  useEffect(() => {
    (async () => {
      const res = await axios.get("https://api.carbonintensity.org.uk/intensity/2023-08-25T12:35Z/2023-08-26T01:00Z")
      dispatch(setIntensityData(res.data.data))
      dispatch({ type: CHART_LOADING })
    })()
  }, [])

  const body = () => (
    <Container>
      <Stack direction="row" spacing={2}>
        <DateTimeField label="From" disableFuture={true} handleChange={(value: Dayjs) => dispatch(setFromDate(value))} />
        <DateTimeField label="To" disableFuture={true} handleChange={(value: Dayjs) => dispatch(setToDate(value))} />
      </Stack>
      <Chart type="bar" width={800} height={500} xValues={xValues} forecastValues={forecastValues} actualValues={actualValues} />
    </Container >
  )

  if (state.isChartLoading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  return <Template headerTitle="Carbon Intensity" body={body()} />
}

export default CarbonIntesity;