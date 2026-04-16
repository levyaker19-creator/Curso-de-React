import { useState } from "react";
import Input from "./input";
function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className=" my-4 space-y-4 p-6 bg-slate-200 rounded-md shadow ">
      <Input
        type="text"
        placeholder="Digite o Título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="bg-slate-500 px-4 py-2 rounded-md text-white font-medium w-full
      "
        onClick={() => {
          if (!title.trim() || !description.trim())
            return alert("Preencha todos os campos");

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
