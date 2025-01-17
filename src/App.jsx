import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { AuthProvider } from "./contexts/AuthContext";
import { Register } from "./components/register/Register";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        {/* <Route path="/login" element={} /> */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
