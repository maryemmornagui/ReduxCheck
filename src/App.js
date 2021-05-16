import { useSelector } from "react-redux";
import { useState } from "react";
import "./App.css";
import Addtask from "./Components/AddTask";
import ListTask from "./Components/ListTask";
import Navbars from "./Components/Navbar";
import donee from "./ok.jpg";
import cancel from "./notOk.jpg";


function App() {
  const todoList = useSelector((state) => state.todos);
  const [done, setDone] = useState(false);
  const [notdone, setNotdone] = useState(false);

  const sndn = () => {
    setNotdone(!notdone);
    setDone(false);
  };
  const sdn = () => {
    setDone(!done);
    setNotdone(false);
  };
  return (
    <div className="App">
      <Navbars />
      <div className="pNav">
        <Addtask />
        <div className="filter">
          <h2> Filter by </h2>
          <a onClick={sdn}>
            <img src={donee} alt="done"  width="30" />
          </a>
          <a onClick={sndn}>
            <img src={cancel} alt="cancel"  width="30" />
          </a>
        </div>
      </div>

      {done
        ? todoList
            .filter((x) => x.done === true)
            .map((todo) => <ListTask key={todo.id} todo={todo} />)
        : notdone
        ? todoList
            .filter((x) => x.done === false)
            .map((todo) => <ListTask key={todo.id} todo={todo} />)
        : todoList.map((todo) => <ListTask key={todo.id} todo={todo} />)}
    </div>
  );
}

export default App;