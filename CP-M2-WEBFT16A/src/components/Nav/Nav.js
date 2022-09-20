import React from 'react';
import {Link} from 'react-router-dom';

export function Nav() {
  return (
    <div>
      Componente Nav
      <Link to="/">
        <span>TODOS</span>
      </Link>
      <Link to="/add">
        <span>Add Todo</span>
      </Link>
    </div>
  )
};

export default Nav;