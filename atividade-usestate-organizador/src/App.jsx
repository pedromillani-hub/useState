import { useState } from "react";

function App() {
  const [texto, setTexto] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState("todas");

  // Etapa 1 — Adicionar tarefas
  function adicionarTarefa(evento) {
    evento.preventDefault();

    const textoLimpo = texto.trim();
    if (textoLimpo === "") {
      return;
    }

    const novaTarefa = {
      id: Date.now(),
      texto: textoLimpo,
      concluida: false,
    };

    setTarefas((anteriores) => [...anteriores, novaTarefa]);
    setTexto("");
  }

  // Etapa 3 — Marcar/desmarcar como concluída
  function alternarConclusao(id) {
    setTarefas((anteriores) =>
      anteriores.map((tarefa) => {
        if (tarefa.id === id) {
          return { ...tarefa, concluida: !tarefa.concluida };
        }

        return tarefa;
      })
    );
  }

  // Etapa 4 — Remover tarefa
  function removerTarefa(id) {
    setTarefas((anteriores) =>
      anteriores.filter((tarefa) => tarefa.id !== id)
    );
  }

  // Desafio extra — Limpar concluídas
  function limparConcluidas() {
    setTarefas((anteriores) =>
      anteriores.filter((tarefa) => !tarefa.concluida)
    );
  }

  // Etapa 5 — Resumo e filtros (valores derivados, sem estado próprio)
  const total = tarefas.length;
  const concluidas = tarefas.filter((tarefa) => tarefa.concluida).length;
  const pendentes = total - concluidas;

  const tarefasVisiveis = tarefas.filter((tarefa) => {
    if (filtro === "pendentes") {
      return !tarefa.concluida;
    }
    if (filtro === "concluidas") {
      return tarefa.concluida;
    }
    return true;
  });

  return (
    <main>
      <h1>Organizador de tarefas</h1>

      <form onSubmit={adicionarTarefa}>
        <label htmlFor="nova-tarefa">Nova tarefa</label>
        <input
          id="nova-tarefa"
          value={texto}
          onChange={(evento) => setTexto(evento.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <p>
        Total: {total} | Concluídas: {concluidas} | Pendentes: {pendentes}
      </p>

      <div>
        <button type="button" onClick={() => setFiltro("todas")}>
          Todas
        </button>
        <button type="button" onClick={() => setFiltro("pendentes")}>
          Pendentes
        </button>
        <button type="button" onClick={() => setFiltro("concluidas")}>
          Concluídas
        </button>
        <button type="button" onClick={limparConcluidas}>
          Limpar concluídas
        </button>
      </div>

      <ul>
        {tarefasVisiveis.length === 0 && <li>Nenhuma tarefa para exibir.</li>}
        {tarefasVisiveis.map((tarefa) => (
          <li key={tarefa.id}>
            <label>
              <input
                type="checkbox"
                checked={tarefa.concluida}
                onChange={() => alternarConclusao(tarefa.id)}
              />
              {tarefa.texto}
            </label>
            <button type="button" onClick={() => removerTarefa(tarefa.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
