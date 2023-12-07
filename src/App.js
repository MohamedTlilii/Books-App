import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import PublicLayout from "./Layouts/PublicLayout";
import ConnexionLayout from "./Layouts/ConnexionLayout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Book from "./Pages/Book";
import { useState } from "react";
import books from "./Data";

function App() {
  const [booksData, setBooksData] = useState(books);
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/books"
          element={<Books booksData={booksData} setBooksData={setBooksData} />}
        />
        <Route path="/book/:id" element={<Book booksData={booksData} />} />
      </Route>
      <Route path="/" element={<ConnexionLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
