import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/index';

// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store. 
// Si usas el hook `useDispatch` no funcionaran los test.

export function AddTodo({addTodo}) {

  const [input, setInput] = React.useState({
    title: "",
    description: "",
    place: "",
    date: "",
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input)
  }

  return (
    <>
    <form onSubmit = {e => handleSubmit(e)}>
    <label>Title</label>
    <input type="text" name="title" onChange={handleInputChange} value={input.title}></input>
    <label>Description</label>
    <textarea type="text" name="description" onChange={handleInputChange} value={input.description}></textarea>
    <label>Place</label>
    <input type="text" name="place" onChange={handleInputChange} value={input.place}></input>
    <label>Date</label>
    <input type="text" name="date" onChange={handleInputChange} value={input.date}></input>
    <button type="submit">ADD TODO!</button>
    </form>
    </>
     ) 
};

function mapDispatchToProps(dispatch){
  return { 
    addTodo : input => dispatch(addTodo(input))
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);