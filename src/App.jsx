import Login from "./pages/Login";
import OnBoarding from "./pages/OnBoarding";
import Signup from "./pages/Signup";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transaction from "./pages/Transaction/Transaction";
import Insights from "./pages/insights/Insights";
import { AuthContextProvider } from "./context/AuthContextProvider";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <ToastContainer />

      <div className="App">
        <AuthContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Signup />} />
              <Route path="/login" element={<Login />} />

              <Route path="/onBoarding" element={<OnBoarding />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transaction" element={<Transaction />} />
              <Route path="/insights" element={<Insights />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </div>
    </>
  );
}
