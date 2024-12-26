import CarbonIntensity from "./pages/carbonIntensity";
import { Routes, Route } from "react-router-dom";
import { roles } from "./utility";
import ProtectedRoute from "./protectedRoutes";
import ErrorBoundary from "./errorBoundary";
import PageNotFound from "./commonComponents/pageNotFound";

const App = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<ProtectedRoute role={[roles.ALL]} element={<CarbonIntensity />} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
