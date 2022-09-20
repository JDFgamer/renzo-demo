import React from 'react';
import Todos from '../Todos/Todos'

export function Home() {
  return (
    <div>
      Componente Home
      <Todos status="Todo"></Todos>
      <Todos status="InProgress"></Todos>
      <Todos status="Done"></Todos>
    </div>
  )
};

export default Home;