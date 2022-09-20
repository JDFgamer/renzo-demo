const initialState = [];

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const todos = (state = initialState, {type,payload}) => {
  switch(type) {
    // Aca va tu codigo;
    case "AddTodo":
      return [...state,{... payload}]
    
    case "RemoveTodo":
      return  state.filter((todo) => todo.id !== payload)
  

    case "ToInProgress":{
      return state.map((todo) => {
        if (todo.id === payload) {
          return {...todo, status: "InProgress"}
        }
      })}
      
      case "ToDone":{
        return state.map((todo) => {
          if (todo.id === payload) {
            return {...todo, status: "Done"}
          }
        })}
    

      default:
        return state; 
}

}
export default todos;
