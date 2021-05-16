import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { editableTodo, editTodo, dnn, notDone } from "../Redux/Actions";
import donee from "../ok.jpg";
import cancel from "../notOk.jpg";

import "../App.css";

const ListTask = ({ todo }) => {
  const [input, setInput] = useState(todo.text);
  const dispatch = useDispatch();

  const edit = () => {
    dispatch(editableTodo(todo.id));
  };
  const save = () => {
    dispatch(editTodo(todo.id, input));
  };
  const dn = () => {
    dispatch(dnn(todo.id));
  };
  const notDn = () => {
    dispatch(notDone(todo.id));
  };
  return (
    <>
      <div className="list" >
        {todo.editable ? (
          <>
            <div className="li">
              <input
              className="Binput"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <a  onClick={dn}>
                <img src={donee} alt="done" width="30" />
              </a>
              <a  onClick={notDn}>
                <img src={cancel} alt="done" width="30" />
              </a>

              <button className="btn" onClick={save}>
                save
              </button>
              <button className="btn" onClick={edit}>
                cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="li">
              <p> {todo.title}</p>
              {todo.done ? (
                <img src={donee} alt="done" width="30" />
              ) : (
                <img src={cancel} alt="done" width="30" />
              )}

              <button className="btn" onClick={edit}> EDIT </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ListTask;