function calcularPotencia (base, expo){
    return Math.pow(base, expo);
}

const container = document.querySelector(".container");
const button = document.querySelector("button");

button.addEventListener("click", () =>{
    const base = document.querySelector("#base").value;
    const expo = document.querySelector("#expo").value;
    const item = document.createElement("div");
    const texto = document.createElement("span");
    texto.textContent = calcularPotencia(base, expo);
    item.appendChild(texto);
    container.appendChild(item);
});
