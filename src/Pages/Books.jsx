import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Form, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// import books from "../Data";

function Books({ booksData, setBooksData }) {
  const [show, setShow] = useState(false);

  const [newBook, setNewBook] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddNewBook = () => {
    setBooksData([...booksData, { ...newBook, id: uuidv4() }]);
    handleClose();
  };

  return (
    <div className="page">
      <button className="add-book-btn" onClick={handleShow}>
        Add book
      </button>
      {booksData.map((book) => (
        <Card style={{ width: "18rem", height: "500px" }}>
          <Card.Img
            className="book-img"
            width="700"
            variant="top"
            src={book.img}
          />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Link>
              <Link to={`/book/${book.id}`}>See more</Link>
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Book Title"
                onChange={(e) => {
                  setNewBook({ ...newBook, title: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Author"
                onChange={(e) => {
                  setNewBook({ ...newBook, author: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Poster"
                onChange={(e) => {
                  setNewBook({ ...newBook, img: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="number"
                placeholder="Price"
                onChange={(e) => {
                  setNewBook({ ...newBook, price: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Description"
                onChange={(e) => {
                  setNewBook({ ...newBook, desc: e.target.value });
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleAddNewBook();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Books;
