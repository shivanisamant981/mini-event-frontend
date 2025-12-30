import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Events from "./pages/Events";
import CreateEvent from "./pages/CreateEvent";
import './App.css'

function App() {
  const token = localStorage.getItem("token");
  const isLoggedIn = token && token !== "undefined";

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? <Navigate to="/events" /> : <Navigate to="/register" />
            }
          />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/events"
            element={isLoggedIn ? <Events /> : <Navigate to="/login" />}
          />
          <Route
            path="/create"
            element={isLoggedIn ? <CreateEvent /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App