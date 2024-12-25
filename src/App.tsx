import CarbonIntensity from "./pages/carbonIntensity";
import { Routes, Route } from "react-router-dom";
import { roles } from "./utility";
import { Box } from "@mui/material";
import ProtectedRoute from "./protectedRoutes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute role={[roles.ALL]} element={<CarbonIntensity />} />} />
      <Route path="*" element={<Box>Page not found</Box>} />
    </Routes>
  );
}

export default App;
