import { useState } from "react";
import "./App.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState([]);

  return (
    <>
      <h1>Lista de Tarefas</h1>

      <label htmlFor="titulo">Título</label>
      <input
        id="titulo"
        type="text"
        placeholder="Título da tarefa"
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
      />

      <label htmlFor="descricao">Descrição</label>
      <input
        id="descricao"
        type="text"
        placeholder="Descrição da tarefa"
        value={descricao}
        onChange={e => setDescricao(e.target.value)}
      />
    </>
  );
}

export default App;
