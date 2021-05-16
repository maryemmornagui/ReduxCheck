import {
    EDIT_TODO,
    COMPLETE_TODO,
    EDITABLE,
    ADDTODO,
    DONE,
    NOTDONE,
  } from "./Constants";
  
  export const editTodo = (idTodo, editedtodo) => {
    return { type: EDIT_TODO, id: idTodo, edited: editedtodo };
  };
  
  export const completeTodo = (idTodo) => {
    return {
      type: COMPLETE_TODO,
      payload: idTodo,
    };
  };
  export const editableTodo = (idTodo) => {
    return {
      type: EDITABLE,
      payload: idTodo,
    };
  };
  export const addTodo = (idTodo) => {
    return {
      type: ADDTODO,
      payload: idTodo,
    };
  };
  export const dnn = (idTodo) => {
    return {
      type: DONE,
      payload: idTodo,
    };
  };
  export const notDone = (idTodo) => {
    return {
      type: NOTDONE,
      payload: idTodo,
    };
  };