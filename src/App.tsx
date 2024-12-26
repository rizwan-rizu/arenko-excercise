import CarbonIntensity from "./pages/carbonIntensity";
import { Routes, Route } from "react-router-dom";
import { roles } from "./utility";
import { Box } from "@mui/material";
import ProtectedRoute from "./protectedRoutes";
import ErrorBoundary from "./errorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<ProtectedRoute role={[roles.ALL]} element={<CarbonIntensity />} />} />
        <Route path="*" element={<Box>Page not found</Box>} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
