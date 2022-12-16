import React from 'react';
import "./App.css";

import Accordion from 'react-bootstrap/Accordion';
import { Card } from 'react-bootstrap';
import Todo from './components/Todo'
import FormTodo from './components/FormTodo';
import 'bootstrap/dist/css/bootstrap.min.css';

import data from './data'

// data={data}

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

function App() {
  const [todos, setTodos] = React.useState([
    {
      titleTodo: "faire les courses",
      description: "à carrefour",
      isDone: false
    },
    {
      titleTodo: "préparer le goûter",
      description: "",
      isDone: true
    },
    {
      titleTodo: "laver la voiture",
      description: "attention aux railleures",
      isDone: false
    }
  ]);

  // const [lists, setLists] = React.useState([
  //   {
  //     titre: "liste 1"
  //   }
  // ]);

  // const addList = titre => {
  //   const newLists = [...lists, { titre }];
  //   setLists(newLists);
  // };

  // const removeList = index => {
  //   const newLists = [...lists];
  //   newLists.splice(index, 1);
  //   setLists(newLists);
  // };

  const addTodo = titleTodo => {
    const newTodos = [...todos, { titleTodo }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  // const markDesc = index => {
  //   const newDesc = [...todos];
  //   newDesc[index].isDone = true;
  //   setTodos(newDesc);
  // };

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
              <div>
              {data.map((data, indexdata) => (
              <Card>
                    <Card.Body>
                      <Todo
                        key={indexdata}
                        index={indexdata}
                        todo={data}
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