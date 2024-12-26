import { Alert, Box, CircularProgress, Container, Stack, Typography } from "@mui/material";
import { Dayjs } from "dayjs";
import { useEffect, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { setFromDate, setToDate } from "./action";
import { fetchCarbonIntensity } from "./api";
import { isValidDateRange } from "../../utility";
import Template from "../template";
import DateTimeField from "../../commonComponents/dateTimeField";
import Chart from "../../commonComponents/chart";
import RadioBtn from "../../commonComponents/radioBtn";

export interface IntensityData {
  from: string;
  to: string;
  intensity: {
    forecast: number;
    actual: number;
    index: string;
  };
}

const CarbonIntensity = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { xValues, forecastValues, actualValues, isChartLoading, from, to, error, intensityType } = state;

  useEffect(() => {
    if (from && to) {
      if (isValidDateRange(from, to, dispatch)) fetchCarbonIntensity(from, to, dispatch);
    }
  }, [from, to])

  const body = () => (
    <Container role="main" aria-label="Carbon Intensity Data">
      <Typography sx={{ pt: 2 }} variant="h6">Filters</Typography>
      <Stack direction="row" alignItems={"center"} sx={{ flexWrap: 'wrap' }} spacing={2}>
        <DateTimeField label="From" disableFuture={true} handleChange={(value: Dayjs | null) => dispatch(setFromDate(value))} />
        <DateTimeField label="To" disableFuture={true} handleChange={(value: Dayjs | null) => dispatch(setToDate(value))} />
        <RadioBtn
          aria-labelledby="intensity-type-label"
          isRow={true}
          title="Intensity Type"
          value={intensityType}
          dispatch={dispatch}
          data={[
            { label: "Forecast", value: "forecast" },
            { label: "Actual", value: "actual" },
            { label: "Both", value: "both" }
          ]}
        />
      </Stack>
      {error && <Alert role="alert" sx={{ mt: 2 }} severity="error">{error}</Alert>}
      <Typography sx={{ py: 3 }} variant="h6">{`Carbon Intensity Over Time (Forecast / Actual)`}</Typography>
      {
        (!from || !to)
          ? <Box textAlign={"center"}><Typography variant="body2">Select dates to see chart</Typography></Box>
          : isChartLoading
            ? <Box textAlign={"center"}><CircularProgress aria-label="Loading chart data" size={50} /></Box>
            : (!error ?
              <Chart
                type="bar"
                height={500}
                xValues={xValues}
                forecastValues={forecastValues}
                actualValues={actualValues}
                intensityType={intensityType}
                xAxisLabel="Date & Time"
                yAxisLabel="Carbon Intensity"
                aria-label="Carbon intensity chart"
              />
              : <Box textAlign={"center"}><Typography variant="body2">Please resolve the error in order to see carbon intensity data.</Typography></Box>
            )
      }
    </Container>
  )

  return <Template headerTitle="Carbon Intensity" body={body()} />
}

export default CarbonIntensity;