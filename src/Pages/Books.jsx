import React from "react";
import {books} from "../Data";
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom";

function Books() {
  return (
    <div className="page" >
{books.map((book)=>(
  <Card  style={{ width: "18rem", height:"500px" }}>
  <Card.Img width="500" variant="top" src={books.img} />
  <Card.Body>
    <Card.Title>{books.title}</Card.Title>
    <Card.Link>
      <Link to={`/book/${book.id}`}>See more</Link>
    </Card.Link>
  </Card.Body>
</Card>
))}
      
    </div>
  );
}

export default Books;
