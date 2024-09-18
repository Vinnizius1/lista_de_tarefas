import { useState } from "react";
import "./App.css";
import ListaDeTarefas from "./components/ListaDeTarefas";
import Formulario from "./components/Formulario";

function App() {
  // Lista de tarefas é inicialmente um array vazio e depois atualizado pela função "adicionarTarefa" enviada para o componente Formulario (filho)
  const [tarefas, setTarefas] = useState([]);

  // Função que recebe a "tarefa" criada no componente Formulario (filho) e então adiciona na "lista de tarefas"
  const adicionarTarefa = tarefa => {
    // Adiciona a "tarefa" à "lista de tarefas" por meio da função de atualização
    setTarefas(tarefasAtuais => [...tarefasAtuais, tarefa]);
  };

  // Função para remover determinada tarefa
  const removerTarefa = id => {
    // Filtro para remover a tarefa identificado pelo "id" passado
    const tarefasFiltradas = tarefas.filter(tarefa => tarefa.id !== id);
    // Atualiza o estado de tarefas
    setTarefas(tarefasFiltradas);
  };

  // Renderiza o título da aplicação, o componente Formulario e o componente ListaDeTarefas
  return (
    <>
      <h1>Lista de Tarefas</h1>

      <Formulario adicionarTarefa={adicionarTarefa} />

      <ListaDeTarefas tarefas={tarefas} removerTarefa={removerTarefa} />
    </>
  );
}

export default App;
