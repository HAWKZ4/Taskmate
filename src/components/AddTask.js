import { useEffect, useRef } from "react";


export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {

  const inputRef= useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  },[task,tasklist])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.task.value === "") {
      return 0;
    } else {
      if (task.id) {
        const date = new Date();
        const updatedTaskList = tasklist.map((todo) =>
          todo.id === task.id
            ? {
                id: task.id,
                name: task.name,
                time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
              }
            : todo
        );
        setTasklist(updatedTaskList);
        setTask({});
      } else {
        const date = new Date();

        const newTask = {
          id: date.getTime(),
          name: e.target.task.value,
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
        };
        setTasklist([...tasklist, newTask]);

        setTask({});
      }
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
          value={task.name || ""}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          ref={inputRef}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};
