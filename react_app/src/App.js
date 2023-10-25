import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from "./Pages/Home";
import Doctors from "./Pages/Doctors";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
      </Routes>
    </Router>
  );
}

export default App;
