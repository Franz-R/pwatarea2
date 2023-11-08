// Función JavaScript para cambiar el color de fondo
document.getElementById("cambiar-color").addEventListener("click", function () {
    var elemento = document.getElementById("elemento-cambiable");
    var colores = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#33FFFF"];
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    elemento.style.backgroundColor = colorAleatorio;
});
