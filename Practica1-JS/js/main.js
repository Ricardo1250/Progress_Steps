//obtener los steps
const steps = document.querySelectorAll(".step")

//obtener la barra de progreso
const bar = document.getElementById("bar")

//obtener la referencia de los botones
const PrevButton = document.getElementById("Prev")
const NextButton = document.getElementById("Next")

//Guardar el paso en el que estamos
let currentsteps = 1

//escuchar el boton siguiente
NextButton.addEventListener("click", () => {

        if (currentsteps < steps.length) {
            currentsteps++;
            ActualizarProgreso()
        }

    })
    //escuchar el boton Anterior
PrevButton.addEventListener("click", () => {
    if (currentsteps > 1) {
        currentsteps--;
        ActualizarProgreso()
    }


})

//funcion para actualizar progreso
function ActualizarProgreso() {
    //Actualizar pasos
    steps.forEach((step, index) => {
        if (index < currentsteps) {
            step.classList.add("Active")
        } else {
            step.classList.remove("Active")
        }
    });
    //Actualizar barra
    const progress = (currentsteps - 1) / (steps.length - 1) * 100
    bar.style.width = progress + "%"

    //Control de lo botones
    if (currentsteps == steps.length) {
        NextButton.disabled = true
    } else if (currentsteps == 1) {
        PrevButton.disabled = true
    } else {
        PrevButton.disabled = NextButton.disabled = false
    }
}