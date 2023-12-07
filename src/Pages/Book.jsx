import React from "react";
import Card from "react-bootstrap/Card";

function Book() {
  return (
    <div className="page-book-page">
      <Card className="Card" style={{ width: "18rem" }}>
        <Card.Img width="500" variant="top" src="" />
        <Card.Body>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
      <div>
        <h1>{}</h1>
        <h4>{}</h4>
        <h6> Price : {} $</h6>
      </div>
      <h1>Single book</h1>
    </div>
  );
}

export default Book;

