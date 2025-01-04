import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Header />
      {/* <Routes>
        <Route path="/login" element={} />
        <Route path="/register"/>
      </Routes> */}
    </AuthProvider>
  );
}

export default App;
