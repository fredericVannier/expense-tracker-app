import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth";
// import { ExpenseTracker } from "./pages/expenseTracker";
import { Dashboard } from "./pages/dashboard";
import { Assets } from "./pages/Assets";

function App() {
  return (
    <div className="layout-dashboard">
      <Router>
        <Routes>
          <Route element={<Auth />} path="/" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Assets />} path="/assets" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
