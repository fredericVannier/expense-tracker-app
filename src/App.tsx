import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth";
import { ExpenseTracker } from "./pages/expenseTracker";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Auth />} path="/" />
          <Route element={<ExpenseTracker />} path="/expense-tracker" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
