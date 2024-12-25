import { useState } from "react";
import "../style.css";

const ToDo = () => {
  const [tasks, settasks] = useState([]);
  const [input, setinput] = useState("");
  console.log(input);
  const addTask = () => {
    if (input === "") {
      alert("please type somthing");
    } else {
      settasks((todos) => {
        return todos.concat({
          text: input,
          id: Math.floor(Math.random() * 10),
        });
      });
      setinput("");
    }
  };
  const removeTask = (id) =>
    settasks((todos) => todos.filter((t) => t.id !== id));
  return (
    <>
      <div className="container">
        <h1>Todo App</h1>
        <br />
        <div id="inputset">
          <input
            type="text"
            value={input}
            placeholder="Type to add tasks"
            onChange={(e) => setinput(e.target.value)}
          />
          <button className="addButton" onClick={addTask}>
            +
          </button>
        </div>
        <div className="tasks">
          <ul>
            {tasks.map(({ text, id }) => (
              <li key={id}>
                <span>{text}</span>
                <button className="del" onClick={() => removeTask(id)}>
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ToDo;
