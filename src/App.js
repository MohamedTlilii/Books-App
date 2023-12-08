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
import PrivateRoutes from "./Routes/PrivateRoutes";
import ConnexionRoutes from "./Routes/ConnextionRoutes";

function App() {
  const [booksData, setBooksData] = useState(books);
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/books"
          element={
            <PrivateRoutes>
              <Books booksData={booksData} setBooksData={setBooksData} />
            </PrivateRoutes>
          }
        />
        <Route path="book/:id" element={<Book booksData={booksData} />} />
        <Route path="not-found" />
      </Route>
      <Route path="/" element={<ConnexionLayout />}>
        <Route
          path="login"
          element={
            <ConnexionRoutes>
              <Login />
            </ConnexionRoutes>
          }
        />
        <Route
          path="register"
          element={
            <ConnexionRoutes>
              <Register />
            </ConnexionRoutes>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
