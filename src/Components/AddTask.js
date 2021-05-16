import { useState } from "react";
import { addTodo } from "../Redux/Actions";
import { useDispatch } from "react-redux";
import "../App.css";

function Addtask() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const addTotdo = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: Math.random(), title: input  , done: false}));
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <form>
        <input
        className="input"
          value={input}
          type="text"
          onChange={handleChange}
          placeholder="Add todo..."
          name="todo"
        />

        <button className="btn" onClick={addTotdo}>AddTodo </button>
      </form>
    </div>
  );
}

export default Addtask;