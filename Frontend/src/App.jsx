import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/Users/Signup";
import Login from "./Components/Users/Login";
import { Toaster } from "react-hot-toast";
import Home from "./Components/Users/Home";
import PrivatePages from "./Components/PrivatePages/PrivatePages";
import Info from "./Components/Users/Info";

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/" element={<Login />} />

        <Route element={<PrivatePages />}>
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<Info />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
