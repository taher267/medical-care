import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Home from "./Pages/Home/Home";
import "./css/style.css";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/LoginSignup/Login";
import Dashboard from "./Pages/Admin/Dashbard/Dashboard";
import PrivateRoute from "./../routes/PrivateRoute";
import Users from "./Pages/Admin/Users/Users";
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
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute />}>
              <Route path="" element={<Dashboard />} />
              <Route path="users" element={<Users />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </AlertProvider>
  );
}
