import React from 'react'
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AddTodo from "./components/AddTodo/AddTodo";
import Nav from "./components/Nav/Nav";



// En este componente deberias cargar tus rutas.
export function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route path="/" component={Nav} />
      <Route path="/" exact component={Home} />
      <Route path="/add" exact component={AddTodo}/>
     
      Checkpoint M2
    </div>
    </BrowserRouter>
  );
}

export default App;

