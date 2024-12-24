import { Alert, Box, CircularProgress, Container, Stack, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { setError, setFromDate, setToDate } from "./action";
import { fetchCarbonIntensity } from "./api";
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
      isValidDateRange(from, to) && fetchCarbonIntensity(from, to, dispatch);
    }
  }, [from, to])

  const isValidDateRange = (from: Dayjs | null, to: Dayjs | null): boolean => {
    if (!from || !to) return false;

    const isFromBeforeTo = from.isBefore(to);
    const isFromInPast = from.isBefore(dayjs());
    const isToInPast = to.isBefore(dayjs());
    const isRangeWithin14Days = to.diff(from, "day") <= 14;

    dispatch(setError(null))

    if (!isFromBeforeTo) {
      dispatch(setError("Invalid date: Ensure from date is before to date. "))
      return false;
    }
    if (!isFromInPast || !isToInPast) {
      dispatch(setError("Invalid date: Ensure the dates (from & to) are in the past. "))
      return false;
    }
    if (!isRangeWithin14Days) {
      dispatch(setError("Invalid date range: Ensure there is at most 14 day range. "))
      return false;
    }

    return true;
  };

  const body = () => (
    <Container>
      <Typography sx={{ py: 2 }} variant="h6">Filters</Typography>
      <Stack direction="row" alignItems={"center"} sx={{ flexWrap: 'wrap' }} spacing={2}>
        <DateTimeField label="From" disableFuture={true} handleChange={(value: Dayjs) => dispatch(setFromDate(value))} />
        <DateTimeField label="To" disableFuture={true} handleChange={(value: Dayjs) => dispatch(setToDate(value))} />
        <RadioBtn
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
      {error && <Alert sx={{ mt: 2 }} severity="error">{error}</Alert>}
      <Typography sx={{ py: 3 }} variant="h6">{`Carbon Intensity Over Time (Forecast / Actual)`}</Typography>
      {
        (!from || !to)
          ? <Box textAlign={"center"}><Typography variant="body2">Select dates to see chart</Typography></Box>
          : isChartLoading
            ? <Box textAlign={"center"}><CircularProgress size={50} /></Box>
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
              />
              : <Box textAlign={"center"}><Typography variant="body2">Please resolve the error in order to see carbon intensity data.</Typography></Box>
            )
      }
    </Container>
  )

  return <Template headerTitle="Carbon Intensity" body={body()} />
}

export default CarbonIntensity;