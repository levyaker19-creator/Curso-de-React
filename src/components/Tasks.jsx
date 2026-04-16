import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./button";
function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/tasks?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow  w-full">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-3 items-center ">
          <Button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-leftw-full text-white p-2 rounded-md w-full flex items-center justify-center  ${
              task.Iscompleted && "line-through"
            }`}
          >
            {task.title}
          </Button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 p-2 rounded-md text-white flex items-center justify-center"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white w-10 flex items-center justify-center"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
