import CarbonIntensity from "./pages/carbonIntensity";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ProtectedRoute from "./protectedRoutes";
import { roles } from "./utility";
import { Box } from "@mui/material";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<ProtectedRoute role={[roles.ALL]} element={<CarbonIntensity />} />} />
        <Route path="*" element={<Box>Page not found</Box>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
