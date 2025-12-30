import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Events from "./pages/Events";
import CreateEvent from "./pages/CreateEvent";
import './App.css'

function App() {
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  return (
    <BrowserRouter>
      {/* Global Tailwind Layout */}
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
        <Routes>
          {/* Entry Decision */}
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/events" />
              ) : (
                <Navigate to="/register" />
              )
            }
          />

          {/* Public */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Protected */}
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

export default App;


