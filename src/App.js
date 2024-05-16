import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import Profile from "./pages/Profile";
import { useAuthContext } from "./hook/useAuthContext";
import Login from "./pages/Login";
function App() {
  const { user } = useAuthContext();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path={user?.position === 1 ? "/accounts" : "/login"}
        element={<Accounts />}
      />
      <Route
        path={
          user?.position === 2 || user?.position === 3 ? "/profile" : "/login"
        }
        element={<Profile />}
      />
    </Routes>
  );
}

export default App;
