import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RewardsSummary from "./RewardsSummary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RewardsSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
