import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { AuthProvider } from "./contexts/AuthContext";
import { Register } from "./components/register/Register";
import { Home } from "./components/home/Home";
import { Login } from "./components/login/Login";
import { Logout } from "./components/logout/Logout";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
