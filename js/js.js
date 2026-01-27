function toggleTexto(id) {

  // Si es pantalla grande no hacer nada
  if (window.innerWidth > 770) {
    return;
  }

  const texto = document.getElementById(id);

  if (texto.style.display === "block") {
    texto.style.display = "none";
  } else {
    texto.style.display = "block";
  }
}

document.getElementById("Modalbutton").onclick = () => {
  toggleTexto("vehiculosdediario");
};

document.getElementById("button").onclick = () => {
  toggleTexto("vehiculosdeportivos");
};

document.getElementById("button2").onclick = () => {
  toggleTexto("vehiculoselectricos");
};

document.getElementById("button3").onclick = () => {
  toggleTexto("vehiculostodoterreno");
};