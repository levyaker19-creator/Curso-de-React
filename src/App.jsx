import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, Iscompleted: !task.Iscompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  function onDeleteTaskClick(taskId) {
    const newTaasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTaasks);
  }

  function onAddTaskSumit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description: description,
      Iscompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 justify-center p-6 ">
      <div className="w-[500px] space-y-4 mx-auto">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSumit} />
        <Tasks
          tasks={tasks}
          onDeleteTaskClick={onDeleteTaskClick}
          onTaskClick={onTaskClick}
        />
      </div>
    </div>
  );
}
export default App;
