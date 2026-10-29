import { useState } from "react";

// Missão 1 — Contador (com botão "Voltar um")
function Contador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador((valorAnterior) => valorAnterior + 1);
  }

  function diminuir() {
    setContador((valorAnterior) => valorAnterior - 1);
  }

  return (
    <section>
      <h2>Missão 1 — Contador</h2>
      <p>Valor atual: {contador}</p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Voltar um</button>
    </section>
  );
}

// Missão 2 — Mostrar e esconder um aviso
function Aviso() {
  const [visivel, setVisivel] = useState(false);

  return (
    <section>
      <h2>Missão 2 — Aviso</h2>
      <button onClick={() => setVisivel(!visivel)}>Alternar aviso</button>
      {visivel && <p>O aviso está visível.</p>}
    </section>
  );
}

// Missão 3 — Saudação com campo de texto
function Saudacao() {
  const [nome, setNome] = useState("");

  return (
    <section>
      <h2>Missão 3 — Saudação</h2>
      <input
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Digite seu nome"
      />
      <p>Olá, {nome || "visitante"}!</p>
    </section>
  );
}

// Desafio final — Cartão de boas-vindas
function CartaoBoasVindas() {
  const [nome, setNome] = useState("");
  const [mostrarSaudacao, setMostrarSaudacao] = useState(true);

  return (
    <section>
      <h2>Desafio final — Cartão de boas-vindas</h2>
      <input
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Digite seu nome"
      />
      <button onClick={() => setMostrarSaudacao(!mostrarSaudacao)}>
        {mostrarSaudacao ? "Esconder saudação" : "Mostrar saudação"}
      </button>
      {mostrarSaudacao && <p>Olá, {nome || "visitante"}!</p>}
    </section>
  );
}

// Desafio extra — Contador com meta
function ContadorComMeta() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador((valorAnterior) => {
      if (valorAnterior >= 10) {
        return valorAnterior;
      }
      return valorAnterior + 1;
    });
  }

  return (
    <section>
      <h2>Desafio extra — Contador com meta</h2>
      <p>Valor atual: {contador}</p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={() => setContador(0)}>Zerar</button>
      {contador === 10 && <p>Meta atingida</p>}
    </section>
  );
}

function App() {
  return (
    <main>
      <h1>Atividade 1 — useState</h1>
      <Contador />
      <Aviso />
      <Saudacao />
      <CartaoBoasVindas />
      <ContadorComMeta />
    </main>
  );
}

export default App;
