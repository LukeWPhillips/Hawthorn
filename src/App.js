import Home from "./pages/Home";
import MyWork from "./pages/MyWork";
import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/work" element={<MyWork />} />
      </Routes>
    </Router>
  );
}

export default App;
