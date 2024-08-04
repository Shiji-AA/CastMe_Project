import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/Users/Signup";
import { Toaster } from "react-hot-toast";
import PrivatePages from "./Components/PrivatePages/PrivatePages";
import LandingPage from "./Pages/LandingPage.jsx";
import HomePage from "./Pages/HomePage.jsx";
import UserInfoPage from "./Pages/UserInfoPage.jsx";

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/" element={<LandingPage />} />
        <Route element={<PrivatePages />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/info" element={<UserInfoPage />} />       
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
