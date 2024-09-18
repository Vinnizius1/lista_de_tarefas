// Desativando a regra eslint para prop-types neste arquivo
/* eslint-disable react/prop-types */

import { useState, useRef } from "react";

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

export default function Formulario({ adicionarTarefa }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  // Cria uma referência para o campo de título
  const inputRefTitulo = useRef(null);

  // Criar uma nova tarefa
  const tarefa = new Tarefa(titulo, descricao);

  // Controla o envio do formulário, adiciona a tarefa criada, limpa os inputs e coloca o foco no campo de título
  function handleSubmit(e) {
    e.preventDefault();

    if (titulo === "" || descricao === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Função do componente PAI (recebida via "props") que adiciona a tarefa criada à "lista de tarefas" no componente PAI
    adicionarTarefa(tarefa);

    setTitulo("");
    setDescricao("");

    inputRefTitulo.current.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="titulo">Título</label>
      <input
        id="titulo"
        type="text"
        placeholder="Título da tarefa"
        value={titulo}
        // Associa a "referência" ao campo de título
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
  );
}
