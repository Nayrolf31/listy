import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

//fonction qui permet de mettre en place les todos dans la liste
function Todo({ todo, index, markTodo, markDesc, removeTodo }) {
    const [smShow, setSmShow] = useState(false);
    return (
      <div
        className="todo d-flex flex-row justify-content-around"
      >
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }} >{todo.titleTodo}  </span>
        <span> </span>
        <div>
        <>
            <Button onClick={() => setSmShow(true)} className="me-2">
              Description
            </Button>
  
            <Modal
              size="sm"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
  
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                  {todo.titleTodo}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>{todo.description}</Modal.Body>
  
            </Modal>
            </>
          <Button variant="outline-success" onClick={() => markTodo(index)} style={{ backgroundColor: todo.isDone ? "#198754": "", color:  "black" }} >✓</Button>{' '}
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
          
        </div>
      </div>
  
    );
  }

  export default Todo;