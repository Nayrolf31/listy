import React from 'react';
import { Button, Form } from 'react-bootstrap';


//fonction qui mettre en place le formulaire d'ajout de todo
function FormTodo({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      // if (!value) return;
      // addTodo(value);
      // setValue("");
      if (value){
        addTodo(value)
        setValue('')
      }
    };
    
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label><b>Ajout Tâche</b></Form.Label>
          <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Ajouter une nouvelle tâche" />
        </Form.Group>
        <Form.Group>
          <Form.Label><b>Ajout Description</b></Form.Label>
          <Form.Control as="textarea" rows={3} name="description" value={value} onChange={e => setValue(e.target.value)} placeholder="Ajouter une nouvelle description" />
        </Form.Group>
        <Button variant="primary mb-3" type="submit">
          Ajout
        </Button>
      </Form>
    );
  }

  export default FormTodo;