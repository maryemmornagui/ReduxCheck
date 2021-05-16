import {
    EDITABLE,
    EDIT_TODO,
    ADDTODO,
    NOTDONE,
    DONE,
  } from "./Constants";
  
  const initState = {
    todos: [
      {
        id: 0,
        title: "Monday",
        text: "Monday is mail & bills day.  I go through the mail, balance the checkbook and pay bills. Yes, I still balance my checkbook.  I have a spreadsheet I use to keep track of it all. I like to tell my money where to go instead of watching where it goes.",
        editable: false,
        done: false,
      },
      {
        id: 1,
        title: "Tuesday ",
        text: "Tuesday is the first half of the laundry. I do my son’s laundry and our towels. (Check out my Easy Laundry System here) I don’t really have a time for doing the laundry. When I wake up I put a load in and then change it out when I have breaks during the day.",
        editable: false,
        done: true,
      },
      {
        id: 2,
        title: "Wednesday ",
        text: "Wednesday I finish the rest of the laundry & plan next week’s menu. I go live every Wednesday night on Facebook to show you how I make my meal plan.",
        editable: false,
        done: false,
      },
      {
        id: 3,
        title: "Thursday ",
        text: "Thursday I write my grocery list and “clip” digital coupons. ",
        editable: false,
        done: true,
      },
      {
        id: 4,
        title: "Friday ",
        text: "Friday I do the grocery shopping.",
        editable: false,
        done: true,
      },
    ],
  };
  
  export const TodoReducer = (state = initState, action) => {
    switch (action.type) {
      case EDIT_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.id
              ? { ...todo, text: action.edited, editable: !todo.editable }
              : todo
          ),
        };
      case EDITABLE:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload
              ? { ...todo, editable: !todo.editable }
              : todo
          ),
        };
      case ADDTODO:
        return {
          ...state,
          todos: state.todos.concat(action.payload),
        };
      case DONE:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload ? { ...todo, done: !todo.done } : todo
          ),
        };
      case NOTDONE:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload ? { ...todo, done: !todo.done } : todo
          ),
        };
      default:
        return state;
    }
  };