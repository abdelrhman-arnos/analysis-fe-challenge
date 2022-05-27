import AnalyticsDashboard from './Components/AnalyticsDashboard/AnalyticsDashboard'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AnalysisDetails from './Components/AnalysisDetails/AnalysisDetails';

function App() {
  return (
    <Router>
    <Routes>
            <Route path="/" element={<AnalyticsDashboard />} />
            <Route path="/details" element={<AnalysisDetails />} />
    </Routes>
    </Router>
  );
}

export default App;
