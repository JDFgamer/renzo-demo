let todoId = 1

export const ADD = "AddTodo";

export const REMOVE = "RemoveTodo";

export const INPROGRESS = "ToInProgress";

export const TODONE = "ToDone";


export function addTodo(payload) {
    payload.status = "Todo"
    payload.id = todoId++
    return {
        type: ADD,
        payload
    }
}

export function removeTodo(payload) {
    return {
        type: REMOVE,
        payload
    }
}
export function toInProgress(payload) {
    return{
        type: INPROGRESS,
        payload
    }
}
export function toDone(payload) {
    return{
        type: TODONE,
        payload
    }
}