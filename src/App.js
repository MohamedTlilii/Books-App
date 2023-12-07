import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Books from "./Pages/Books"
import { Routes, Route } from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />} >
      <Route index element={<Home />} />
      <Route path="/Books" element={<Books />} />
      </Route>
    </Routes>
  );
}

export default App;
