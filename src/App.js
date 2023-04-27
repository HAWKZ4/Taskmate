import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ShowTask } from "./components/ShowTask";
import { AddTask } from "./components/AddTask";

import "./App.css";

function App() {
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));

  }, [tasklist]);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTask
          tasklist={tasklist}
          setTasklist={setTasklist}
          task={task}
          setTask={setTask}
          
        />
        <ShowTask
          tasklist={tasklist}
          setTasklist={setTasklist}
          task={task}
          setTask={setTask}
          
        />
      </div>
    </div>
  );
}

export default App;
