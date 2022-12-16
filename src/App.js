import React, { useState } from 'react';
import "./App.css";

import Accordion from 'react-bootstrap/Accordion';
import { Button, Card, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import data from './data.json'

data={data}


function Todo({ todo, index, markTodo, markDesc, removeTodo }) {
  const [smShow, setSmShow] = useState(false);
  return (
    <div
      className="todo d-flex flex-row justify-content-around"
    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }} >{todo.text}  </span>
      {/* <span onClick={() => markDesc(index)} style={{display: "none", display: "flex"}}>|| { todo.description } </span> */}
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
                {todo.text}
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

// function List({ list, index, removeList}) {
//   return (
//     <div
//       className="todo"
//     >
//       <span>{list.text}</span>
//       <div>
//         <Button variant="outline-danger" onClick={() => removeList(index)}>✕</Button>
//       </div>
//     </div>

//   );
// }

// function FormList({ addList }) {
//   const [value, setValue] = React.useState("");

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!value) return;
//     addList(value);
//     setValue("");
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group>
//         <Form.Label><b>Nouvelle Liste</b></Form.Label>
//         <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Ajouter une nouvelle liste !" />
//       </Form.Group>
//       <Button variant="primary mb-3" type="submit">
//         Ajout
//       </Button>
//     </Form>
//   );
// }

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label><b>Ajout Tâche</b></Form.Label>
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Ajouter une nouvelle tâche" />
      </Form.Group>
      <Form.Group>
        <Form.Label><b>Ajout Description</b></Form.Label>
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Ajouter une nouvelle description" />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Ajout
      </Button>
    </Form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "faire les courses",
      description: "à carrefour",
      isDone: false
    },
    {
      text: "préparer le goûter",
      description: "",
      isDone: true
    }
  ]);

  const [lists, setLists] = React.useState([
    {
      titre: "liste 1"
    }
  ]);

  // const addList = titre => {
  //   const newLists = [...lists, { titre }];
  //   setLists(newLists);
  // };

  // const removeList = index => {
  //   const newLists = [...lists];
  //   newLists.splice(index, 1);
  //   setLists(newLists);
  // };

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const markDesc = index => {
    const newDesc = [...todos];
    newDesc[index].isDone = true;
    setTodos(newDesc);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        {/* <FormList addList={addList} /> */}
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Liste</Accordion.Header>
            <Accordion.Body>
              <FormTodo addTodo={addTodo} />
              <div>
                {todos.map((todo, index) => (
                  <Card>
                    <Card.Body>
                      <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        markTodo={markTodo}
                        removeTodo={removeTodo}
                      />
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default App;