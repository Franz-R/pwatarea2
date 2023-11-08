// Función para cambiar la imagen al pasar el ratón sobre ella
function cambiarImagen() {
    const imagen = document.getElementById("imagen");
    if (imagen.src.endsWith("wolverine_1.png")) {
        imagen.src = "wolverine_2.jpg";
    } else {
        imagen.src = "wolverine_1.png";
    }
}