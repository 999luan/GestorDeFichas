function submitForm(event) {
  event.preventDefault();
  // pegar os valores dos inputs do formulário e atribuir os valores aos elementos da tabela da ficha

  const name = document.getElementById("name").value;
  const className = document.getElementById("class").value;
  const level = document.getElementById("level").value;
  const race = document.getElementById("race").value;
  const alignment = document.getElementById("alignment").value;
  const hitPoints = document.getElementById("hitPoints").value;
  const abilities = document.getElementById("abilities").value;
  const equipment = document.getElementById("equipment").value;

  // atribuir os valores aos elementos da tabela da ficha
  document.getElementById("name-display").innerHTML = name;
  document.getElementById("class-display").innerHTML = className;
  document.getElementById("level-display").innerHTML = level;
  document.getElementById("race-display").innerHTML = race;
  document.getElementById("alignment-display").innerHTML = alignment;
  document.getElementById("hitPoints-display").innerHTML = hitPoints;
  document.getElementById("abilities-display").innerHTML =
    document.getElementById("abilities").value;
  document.getElementById("equipment-display").innerHTML = equipment;
}
