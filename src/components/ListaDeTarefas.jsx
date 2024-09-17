// Desativando a regra eslint para prop-types neste arquivo
/* eslint-disable react/prop-types */

const ListaDeTarefas = ({ tarefas, removerTarefa }) => {
  return (
    <ul>
      {tarefas.map(({ id, titulo, descricao }) => (
        <li key={id}>
          <h3>{titulo}</h3>
          <p>{descricao}</p>
          <button type="button" onClick={() => removerTarefa(id)}>
            Remover Tarefa
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListaDeTarefas;
