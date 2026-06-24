import Login from "./pages/Login";
import OnBoarding from "./pages/OnBoarding";
import Signup from "./pages/Signup";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import AppContextProvider from "./context/AppContextProvider";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import Insights from "./pages/Insights";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = '/signup' element = {<Signup />} />
        <Route path = '/' element = {<Login/>}/>

        
          <Route path="/onBoarding" element = {<AppContextProvider><OnBoarding/> </AppContextProvider>}/>
          <Route path="/dashboard" element ={<AppContextProvider><Dashboard/></AppContextProvider>}/>
          <Route path='/transaction' element = {<Transaction/>}/>
          <Route path='/insights' element = {<Insights/>}/>
        
        <Route path="*" element = {<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
