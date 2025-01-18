import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import {ToastContainer} from "react-toastify";
import RootLayout from "./components/RootLayout.tsx";
import Home from "./components/wall/Home.tsx";
import StaffWall from "./components/wall/StaffWall.tsx";
import VehicleWall from "./components/wall/VehicleWall.tsx";
import FieldWall from "./components/wall/FieldWall.tsx";
import EquWall from "./components/wall/EquWall.tsx";
import CropWall from "./components/wall/CropWall.tsx";
import CropDataWall from "./components/wall/CropDataWall.tsx";

function App() {

  return (
      <>
          <ToastContainer />
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage />} />

                <Route path="/dashboard" element={ <RootLayout /> } >
                    <Route path="home" element={ <Home /> } />
                    <Route path="staff_management" element={ <StaffWall /> } />
                    <Route path="vehicle_management" element={ <VehicleWall /> } />
                    <Route path="field_management" element={ <FieldWall /> } />
                    <Route path="equ_management" element={ <EquWall /> } />
                    <Route path="crop_management" element={ <CropWall /> } />
                    <Route path="monitor_log" element={ <CropDataWall /> } />
                </Route>
            </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
