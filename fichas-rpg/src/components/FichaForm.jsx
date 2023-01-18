import React, { useState } from "react";

const FichaForm = () => {
  // cria estado para armazenar os dados do formulário
  const [nome, setNome] = useState("");
  const [classe, setClasse] = useState("");
  const [nivel, setNivel] = useState("");
  const [vida, setVida] = useState("");
  const [mana, setMana] = useState("");

  // função que é chamada quando o formulário é submetido
  const handleSubmit = (e) => {
    e.preventDefault();
    // salvando os dados no armazenamento local do navegador
    localStorage.setItem("nome", nome);
    localStorage.setItem("classe", classe);
    localStorage.setItem("nivel", nivel);
    localStorage.setItem("vida", vida);
    localStorage.setItem("mana", mana);
    alert("Ficha salva com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome do personagem:</label>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <br />
      <label>Classe:</label>
      <input
        type="text"
        value={classe}
        onChange={(e) => setClasse(e.target.value)}
        required
      />
      <br />
      <label>Nível:</label>
      <input
        type="number"
        value={nivel}
        onChange={(e) => setNivel(e.target.value)}
        required
      />
      <br />
      <label>Vida:</label>
      <input
        type="number"
        value={vida}
        onChange={(e) => setVida(e.target.value)}
        required
      />
      <br />
      <label>Mana:</label>
      <input
        type="number"
        value={mana}
        onChange={(e) => setMana(e.target.value)}
        required
      />
      <br />
      <input type="submit" value="Salvar" />
    </form>
  );
};
