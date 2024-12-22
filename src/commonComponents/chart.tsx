import { BarChart, LineChart } from "@mui/x-charts";
import { State } from "../pages/carbonIntensity/reducer";

interface iChartProps {
  type: "bar" | "line"
  width: number;
  height: number
  xValues: State["xValues"];
  forecastValues: State["forecastValues"];
  actualValues: State["actualValues"];
}

const Chart = (props: iChartProps) => {
  const { xValues, forecastValues, actualValues, type, width, height } = props;

  if (type === "bar") return (
    <BarChart
      width={width}
      height={height}
      series={[
        { data: forecastValues, label: 'Forcast' },
        { data: actualValues, label: 'Actual' },
      ]}
      xAxis={[{ scaleType: 'band', data: xValues }]}
    />
  )
  else return (
    <LineChart
      width={width}
      height={height}
      series={[
        { data: forecastValues, label: 'Forcast' },
        { data: actualValues, label: 'Actual' },
      ]}
      xAxis={[{ scaleType: 'point', data: xValues }]}
    />
  )
}

export default Chart;