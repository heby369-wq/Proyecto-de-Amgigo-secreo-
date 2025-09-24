const amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (!nombre) {
    alert("Por favor, inserte un nombre");
    return;
  }

  amigos.push(nombre);
  input.value = "";
  mostrarListaAmigo();
}

function mostrarListaAmigo() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = amigos
    .map(nombre => `<li>${nombre}</li>`)
    .join("");
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  document.getElementById("resultado").textContent = amigos[indice];
}