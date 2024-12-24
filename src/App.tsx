import CarbonIntensity from "./pages/carbonIntensity";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CarbonIntensity />
    </ThemeProvider>
  );
}

export default App;
