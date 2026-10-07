const parrafo = document.getElementById("parrafo");
const botonEstilo = document.getElementById("botonEstilo");

botonEstilo.addEventListener("click", function () {
    parrafo.style.fontFamily = "Georgia, serif";
    parrafo.style.fontSize = "24px";
    parrafo.style.color = "#f5576c";
});

const formulario = document.getElementById("form1");

formulario.addEventListener("submit", function (event) {
    // Evita que la página se recargue
    event.preventDefault();

    const nombre = formulario.elements["fname"].value;
    const apellido = formulario.elements["lname"].value;

    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
});

const botonEnlaces = document.getElementById("botonEnlaces");

botonEnlaces.addEventListener("click", function () {
    const enlaces = document.querySelectorAll("a");

    const total = enlaces.length;
    const primerEnlace = enlaces[0].href;
    const ultimoEnlace = enlaces[total - 1].href;

    alert(
        "Número total de enlaces: " + total +
        "\nPrimer enlace: " + primerEnlace +
        "\nÚltimo enlace: " + ultimoEnlace
    );
});

// 1. Seleccionar la sección #contenedor
const contenedor = document.getElementById("contenedor");

// 2. Seleccionar todos los elementos .segundo
const elementosSegundo = document.querySelectorAll(".segundo");

// 3. Seleccionar .tercero dentro de <ol>
const terceroOl = document.querySelector("ol .tercero");

// Mostrar en consola para comprobar las selecciones
console.log("Contenedor:", contenedor);
console.log("Elementos .segundo:", elementosSegundo);
console.log("Tercero dentro de ol:", terceroOl);


// 4. Cambiar el texto del contenedor
contenedor.textContent = "¡Hola!";


// 5. Añadir la clase principal al footer
const footer = document.querySelector(".footer");

footer.classList.add("principal");


// 6. Eliminar la clase principal del footer
footer.classList.remove("principal");


// 7. Crear un nuevo elemento li
const nuevoLi = document.createElement("li");


// 8. Darle el texto "cuatro"
nuevoLi.textContent = "cuatro";


// 9. Añadir el nuevo li al ul
const ul = document.querySelector("#contenedor ul");

ul.append(nuevoLi);