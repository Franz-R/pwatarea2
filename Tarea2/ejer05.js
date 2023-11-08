function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var contrasena = document.getElementById("contrasena").value;

    if (nombre === "" || email === "" || contrasena === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }
    
    // Aquí puedes agregar más validaciones, como verificar la fortaleza de la contraseña o el formato del correo electrónico.

    return true; // Envía el formulario si todos los campos están llenos.
}