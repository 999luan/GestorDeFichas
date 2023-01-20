import { fichas } from "../../data";
import { useState } from "react";

const FichaForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    level: 0,
    race: "",
    alignment: "",
    hitPoints: 0,
    abilities: "",
    equipment: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const excerpt = `Ficha completa para jogadores de RPG interessados em criar um personagem ${formData.class}.`;
    const body = `Nome: ${formData.name} \n Classe: ${formData.class} \n Raça: ${formData.race} \n Alinhamento: ${formData.alignment} \n Atributos: Força: ${formData.atributes.strength}, Destreza: ${formData.atributes.dexterity}, Constituição: ${formData.atributes.constitution}, Inteligência: ${formData.atributes.intelligence}, Sabedoria: ${formData.atributes.wisdom}, Carisma: ${formData.atributes.charisma} \n Habilidades: ${formData.abilities} \n Itens: ${formData.items} \n Descrição: ${formData.description}`;
    fichas.push({
      id: Date.now(),
      title: `Ficha de Personagem - ${formData.class}`,
      excerpt: excerpt,
      body: body,
    });
    setFichas([...fichas]);
  }

  return (
    <div className="container">
      <form id="character-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" onChange={handleInputChange} />
        <br />

        <label htmlFor="class">Classe:</label>
        <select
          id="class"
          name="class"
          onChange={handleInputChange}
          value={formData.class}
        >
          <option value="paladin">Paladino</option>
          <option value="mago">Mago</option>
          <option value="ladrao">Ladrão</option>
          <option value="guerreiro">Guerreiro</option>
        </select>
        <br />

        <label htmlFor="level">Nível:</label>
        <input
          type="number"
          id="level"
          name="level"
          min="1"
          max="20"
          onChange={handleInputChange}
          value={formData.level}
        />
        <br />

        <label htmlFor="race">Raça:</label>
        <input
          type="text"
          id="race"
          name="race"
          onChange={handleInputChange}
          value={formData.race}
        />
        <br />

        <label htmlFor="alignment">Alineação:</label>
        <select
          id="alignment"
          name="alignment"
          onChange={handleInputChange}
          value={formData.alignment}
        >
          <option value="lawful good">Lawful Good</option>
          <option value="neutral good">Neutral Good</option>
          <option value="chaotic good">Chaotic Good</option>
        </select>
        <br />

        <label htmlFor="hitPoints">Pontos de vida:</label>
        <input
          type="number"
          id="hitPoints"
          name="hitPoints"
          min="0"
          max="9999"
          onChange={handleInputChange}
          value={formData.hitPoints}
        />
        <br />
        <div>
          <div>
            <h1>Atributos</h1>
            <article>
              <label htmlFor="strength">Força:</label>
              <input
                type="number"
                id="strength"
                name="strength"
                min="1"
                max="20"
                onChange={handleInputChange}
              />
              <br />

              <label htmlFor="dexterity">Destreza:</label>
              <input
                type="number"
                id="dexterity"
                name="dexterity"
                min="1"
                max="20"
                onChange={handleInputChange}
              />
              <br />

              <label htmlFor="constitution">Constituição:</label>
              <input
                type="number"
                id="constitution"
                name="constitution"
                min="1"
                max="20"
                onChange={handleInputChange}
              />
              <br />

              <label htmlFor="intelligence">Inteligência:</label>
              <input
                type="number"
                id="intelligence"
                name="intelligence"
                min="1"
                max="20"
                onChange={handleInputChange}
              />
              <br />

              <label htmlFor="wisdom">Sabedoria:</label>
              <input
                type="number"
                id="wisdom"
                name="wisdom"
                min="1"
                max="20"
                onChange={handleInputChange}
              />
              <br />

              <label htmlFor="charisma">Carisma:</label>
              <input
                type="number"
                id="charisma"
                name="charisma"
                min="1"
                max="20"
                onChange={handleInputChange}
              />
              <br />
            </article>
          </div>
        </div>
        <label htmlFor="abilities">Habilidades:</label>
        <textarea
          id="abilities"
          name="abilities"
          onChange={handleInputChange}
          value={formData.abilities}
        />
        <br />

        <label htmlFor="equipment">Equipamentos:</label>
        <input
          type="text"
          id="equipment"
          name="equipment"
          onChange={handleInputChange}
          value={formData.equipment}
        />
        <br />

        <input type="submit" value="Enviar" onClick={handleSubmit} />
      </form>
    </div>
  );
};
export default FichaForm;
