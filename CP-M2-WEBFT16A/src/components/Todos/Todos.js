import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Todo from '../Todo/Todo.js';

export function Todos({todos,status}) {
  return (
    <div>
       <div><span>{status}</span></div>
      {todos && todos.map(todo=> {
        
        if (status === todo.status){
          return(
            <div key= {todo.id}>
              <Link to= {`/edit/${todo.id}`}>
                <Todo title= {todo.title}/>
              </Link>
             
            </div>
          )
        }
      })}
      
    </div>
  )
};

function mapStateToProps(state){
  return{
    todos: state
  }
}

export default connect(mapStateToProps)(Todos);