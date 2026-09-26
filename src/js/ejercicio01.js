function formulario() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    if (valorNombre === "" || valorApellido === "" || valorLibreta === "") {
        alert("Por favor, completa todos los datos.");
        return;
    }
    
    agregarEstudiante(nombre, correo, mensaje);

    const htmlListo = obtenerHTMLDeLaTabla();
    document.querySelector("#cuerpo-tabla").innerHTML = htmlListo;

    document.querySelector("#Nombre").value = "";
    document.querySelector("#Apellido").value = "";
    document.querySelector("#LibretaUniversitaria").value = "";
    
}