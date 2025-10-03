import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./components/Login"
import Profile from "./components/AgencyProfile"
import CitizenRegister from "./components/CitizenRegister"
import CentralDashBoard from "./components/CentralDashBoard"
import StateReg from "./components/StateReg"
import AgencyRegister from "./components/AgencyRegister"
import StateDashboard from "./components/StateDashboard"
import AgencyDashBoard from "./components/AgencyDashBoard"
import CitizenDashBoard from "./components/CitizenDashBoard"
import MainDashboard from "./components/MainDashboard"
import ProtectedRoute from "./components/ProtectRoute"
import CentralRegister from "./components/CentralRegister"
import Schemes from "./components/Schemes"
import AddScheme from "./components/AddScheme"
import SchemeState from "./components/SchemeState"
import SchemeUT from "./components/SelectUT"
import { ToastContainer } from "react-toastify";
import About from "./components/About"
import Contact from "./components/Contact"
import Report from "./components/Report"
import CentralProfile from "./components/CentralProfile"
import Loans from "./components/Loans"
import StateProfile from "./components/StateProfile"
import Agency from "./components/Agency"
import AgencyProfile from "./components/AgencyProfile"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/agencypro" element={<AgencyProfile/>}/>
        <Route path="/citizenRegister" element={<CitizenRegister/>}/>
        <Route path="/centraldash" element={<ProtectedRoute role="CENTRAL"><CentralDashBoard/></ProtectedRoute>}/>
        <Route path="/statedash" element={ <ProtectedRoute role="STATE"><StateDashboard/></ProtectedRoute>}/>
        <Route path="/agencydash" element={<ProtectedRoute role="AGENCY"><AgencyDashBoard/></ProtectedRoute>}/>
        <Route path="/citizendash" element={ <ProtectedRoute role="CITIZEN"><CitizenDashBoard/></ProtectedRoute>}/>
        <Route path="/statereg" element={<StateReg/>}/>
        <Route path="/agencyreg" element={<AgencyRegister/>}/>
        <Route path="/" element={<MainDashboard/>}/>
        <Route path="/centralreg" element={<CentralRegister/>}/>
        <Route path="/schemes" element={<Schemes/>}/>
        <Route path="/addscheme" element={<AddScheme/>}/>
        <Route path="/schemestate" element={<SchemeState/>}/>
        <Route path="/schemeut" element={<SchemeUT/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/centralpro" element={<CentralProfile/>}/>
        <Route path="/loans" element={<Loans/>}/>
        <Route path="/statepro" element={<StateProfile/>}/>
        <Route path="/agencies" element={<Agency/>}/>
      </Routes>
    </BrowserRouter>
     <ToastContainer />
    </>
  )
}

export default App