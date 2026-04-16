import { useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
function TaskPage() {
  const navigate = useNavigate();
  navigate("/");
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-500 p-6">
      <div className="w-[500px] space-y-4 mx-auto">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate("/")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-slate-400 p-2 rounded-md text-white flex items-center justify-center"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>
        <div className="bg-slate-200 shadow-md p-4 rounded-md ">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
