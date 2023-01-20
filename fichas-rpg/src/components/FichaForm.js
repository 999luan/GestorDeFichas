import { useState } from "react";

const FichaForm = () => {
  const [formData, setFormData] = useState({
    name: "teste",
    class: "barbarian",
    level: 1,
    race: "teste",
    alignment: "lawful good",
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
    console.log(formData);
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
          <option value="barbarian">Barbaro</option>
          <option value="bard">Bardo</option>
          <option value="cleric">Clérigo</option>
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

        <label htmlFor="abilities">Habilidades:</label>
        <textarea
          id="abilities"
          name="abilities"
          onChange={handleInputChange}
          value={formData.abilities}
        />
        <br />
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
