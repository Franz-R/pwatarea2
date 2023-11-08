function agregarTarea() {
    var tarea = document.getElementById("newTask").value;
    if (tarea === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    var lista = document.getElementById("listaTareas");
    var nuevaTarea = document.createElement("li");
    nuevaTarea.innerHTML = tarea;
    nuevaTarea.onclick = function() {
        this.remove();
    };
    lista.appendChild(nuevaTarea);

    document.getElementById("newTask").value = "";
}