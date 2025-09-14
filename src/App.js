import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from "./Pages/Home";
import Doctors from "./Pages/Doctors";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Appointments from "./Pages/Appointments";
import AssignDoctor from "./Pages/AssignDoctor";
import Profile from "./Pages/Profile";
import CreateAppointment from "./Pages/CreateAppointment";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/assign" element={<AssignDoctor />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<CreateAppointment />} />
      </Routes>
    </Router>
  );
}

export default App;
