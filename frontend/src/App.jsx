// src/App.jsx
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AdminLogin from "./auth/AdminLogin";
import UserLogin from "./auth/UserLogin";
import Register from "./auth/Register";
import Logout from "./auth/Logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        {/* Add dashboards or other protected routes later */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
