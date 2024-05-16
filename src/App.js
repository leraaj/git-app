import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import Profile from "./pages/Profile";
import { useAuthContext } from "./hook/useAuthContext";
import Login from "./pages/Login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path={"/accounts"} element={<Accounts />} />
      <Route path={"/profile"} element={<Profile />} />
    </Routes>
  );
}

export default App;
