import React from "react";
import Card from "react-bootstrap/Card";
// import books from "../Data";
import { useParams } from "react-router-dom";

function Book({ booksData }) {
  let { id } = useParams();
  let book = booksData.find((book) => book.id === id);
  return (
    <div className="page-book-page">
      <Card>
        <Card.Img className="book-img" src={book?.img} />
        <Card.Body>
          <Card.Text> {book?.desc}</Card.Text>
        </Card.Body>
      </Card>
      <div>
        <h1>{book?.title}</h1>
        <h4>{book?.author}</h4>
        <h6> Price : {book?.price} $</h6>
      </div>
    </div>
  );
}

export default Book;
