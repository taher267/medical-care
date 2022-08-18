import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Home from "./Pages/Home/Home";
import "./css/bootstrap.css";
import "./css/style.css";
import Services from "./Pages/Services/Services";
import About from "./Pages/About/About";
import Doctors from "./Pages/Doctors/Doctors";
import Contact from "./Pages/Contact/Contact";
import Signup from "./Pages/LoginSignup/Signup";
import Login from "./Pages/LoginSignup/Login";
import { Alerm } from "./alerm/Alerm";
const options = {
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};
export default function Main() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Alerm />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </AlertProvider>
  );
}
