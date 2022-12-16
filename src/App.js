import React from 'react';
import "./App.css";

import Accordion from 'react-bootstrap/Accordion';
import { Card } from 'react-bootstrap';
import Todo from './components/Todo'
import FormTodo from './components/FormTodo';
import 'bootstrap/dist/css/bootstrap.min.css';

import data from './data'


//Mise en place de la fonction app afin de récupérer les composants et la data utilise à l'affichage
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

  const addTodo = titleTodo => {
    const newTodos = [...todos, { titleTodo }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  //return afin de créer la partie visuel de l'application
  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
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