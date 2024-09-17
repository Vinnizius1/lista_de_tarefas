import { useState, useRef } from "react";
import "./App.css";
import ListaDeTarefas from "./components/ListaDeTarefas";

// Classe para criar objetos de tarefas
class Tarefa {
  constructor(titulo, descricao) {
    // Definir as propriedades da tarefa
    this.titulo = titulo;
    this.descricao = descricao;
    // Gerar um ID único para cada tarefa
    this.id = Math.random().toString(16).substring(2, 8);
  }
}

function App() {
  // useState para controlar o estado da aplicação
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tarefas, setTarefas] = useState([]);

  // Cria uma referência para o campo de título
  const inputRefTitulo = useRef(null);

  // Função para adicionar uma nova tarefa
  const adicionarTarefa = event => {
    // Evitar que o formulário seja enviado
    event.preventDefault();
    // Verificar se o campo de título foi preenchido
    if (titulo === "" || descricao === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    // Criar uma nova tarefa
    const tarefa = new Tarefa(titulo, descricao);
    // Adicionar a tarefa ao estado por meio de uma função de atualização
    setTarefas(() => [...tarefas, tarefa]);
    // Limpar os inputs
    setTitulo("");
    setDescricao("");
    // Colocar o foco no campo de título
    inputRefTitulo.current.focus();
  };

  // Função para remover tarefa
  const removerTarefa = id => {
    // Remover a tarefa
    const tarefasFiltradas = tarefas.filter(tarefa => tarefa.id !== id);
    // Atualizar o estado de tarefas
    setTarefas(tarefasFiltradas);
  };

  // Função para renderizar a lista de tarefas
  return (
    <>
      <h1>Lista de Tarefas</h1>

      <form onSubmit={adicionarTarefa}>
        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          type="text"
          placeholder="Título da tarefa"
          value={titulo}
          // Associar a referência ao campo de título
          ref={inputRefTitulo}
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

        <button type="submit">Adicionar Tarefa</button>
      </form>

      <ListaDeTarefas tarefas={tarefas} removerTarefa={removerTarefa} />
    </>
  );
}

export default App;
