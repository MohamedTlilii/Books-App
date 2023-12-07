import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import Book from "./Pages/Book";

import PublicLayout from "./Layouts/PublicLayout";
import ConnexionLayout from "./Layouts/ConnexionLayout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:id" element={<Book />} />
      </Route>
      <Route path="/" element={<ConnexionLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
