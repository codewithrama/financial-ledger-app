import Login from "./pages/Login";
import OnBoarding from "./pages/OnBoarding";
import Signup from "./pages/Signup";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import AppContextProvider from "./context/AppContextProvider";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import Insights from "./pages/Insights";
import AuthContextProvider from "./context/AuthContextProvider";
import { ToastContainer, toast } from 'react-toastify';


export default function App() {
  return (
    <>
    <ToastContainer/>

    <div className="App">
  <AppContextProvider>
    <AuthContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Signup />} />
        <Route path = '/login' element = {<Login/>}/>

          <Route path="/onBoarding" element = {<OnBoarding/> }/>
          <Route path="/dashboard" element ={<Dashboard/>}/>
          <Route path='/transaction' element = {<Transaction/>}/>
          <Route path='/insights' element = {<Insights/>}/>
        
        <Route path="*" element = {<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  </AppContextProvider>

    </div>
    </>
  );
}
