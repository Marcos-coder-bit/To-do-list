import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim() || !category) return;

    addTodo(value.trim(), category);
    setValue("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite a tarefa..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione a categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>

        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default TodoForm;