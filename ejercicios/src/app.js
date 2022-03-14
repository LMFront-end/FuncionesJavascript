//1. Hacer un programa que pida por prompt al usuario las 4 propiedades de la tarea y agregarlo al array de tareas.

/*
let tareas = new Array();

for (let i = 0; i < 4; i++) {
    let tarea = prompt("introduce 4 tareas:");
    tareas.push(tarea);
}

console.log(tareas);
*/

//forma #2:

let tareas = [];

function insertarTarea(evt) {
    evt.preventDefault();

    let tarea = document.getElementById("nombreTarea").value;

    if (tarea == "") {
        alert("No ha ingresado una tarea");
    } else if (!existeTarea(tarea)) {
        let opcion = "<li> " + tarea + "</li>";

        let lista = document.getElementById("lista-tareas");

        lista.innerHTML += opcion;

        tareas.push(tarea);

        alert("Se ha insertado una tarea");
    } else {
        alert("la tarea ya fue ingresada");
    }
}

function existeTarea(tarea) {
    for (let i = 0; i < tareas.length; i++) {
        const element = tareas[i];

        if (element.trim().toLowerCase() === tarea.trim().toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
}