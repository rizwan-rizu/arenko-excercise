import { BarChart, LineChart } from "@mui/x-charts";
import { State } from "../pages/carbonIntensity/reducer";
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { styled } from '@mui/material/styles';

interface iChartProps {
  type: "bar" | "line"
  width?: number;
  height?: number
  xValues: State["xValues"];
  forecastValues: State["forecastValues"];
  actualValues: State["actualValues"];
  xAxisLabel?: string
  yAxisLabel?: string
  intensityType: string
}

const Chart = (props: iChartProps) => {
  const { xValues, forecastValues, actualValues, type, width, height, yAxisLabel, xAxisLabel, intensityType } = props;

  const getSeries = () => {
    switch (intensityType) {
      case "forecast":
        return [{ data: forecastValues, label: "Forecast Intensity" }];
      case "actual":
        return [{ data: actualValues, label: "Actual Intensity" }];
      case "both":
      default:
        return [
          { data: forecastValues, label: "Forecast Intensity" },
          { data: actualValues, label: "Actual Intensity" },
        ];
    }
  };

  return (
    <StyledChartWrapper>
      {type === "bar" ? (
        <BarChart
          data-testid="barChart"
          width={width}
          height={height}
          series={getSeries()}
          yAxis={[{ label: yAxisLabel }]}
          xAxis={[{ label: xAxisLabel, scaleType: "band", data: xValues }]}
        />
      ) : (
        <LineChart
          data-testid="lineChart"
          width={width}
          height={height}
          series={getSeries()}
          yAxis={[{ label: "Carbon Intensity" }]}
          xAxis={[{ label: "Date and Time", scaleType: "point", data: xValues }]}
        />
      )
      }
    </StyledChartWrapper>
  )
}

const StyledChartWrapper = styled('div')(() => ({
  [`.${axisClasses.left} .${axisClasses.label}`]: {
    transform: 'translate(-10px, 0)',
  },
}));

export default Chart;