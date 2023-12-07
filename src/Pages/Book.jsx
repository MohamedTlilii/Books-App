import React from "react";
import Card from "react-bootstrap/Card";

function Book() {
  return (
    <div className="page-book-page">
      <Card className="Card">
        <Card.Img width="500" vraiant="top" src={book?.img} />
        <CardBody>
          <Card.Text> {book?.desc}</Card.Text>
        </CardBody>
      </Card>
      <div>
        <h1>{book.title}</h1>
        <h4>{book.author}</h4>
        <h6> Price : {book.price} $</h6>
      </div>

      <h1>Single book</h1>
    </div>
  );
}

export default Book;
