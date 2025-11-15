const btn = document.getElementById("btnNoticias");
const lista = document.getElementById("listaNoticias");

btn.addEventListener("click", () => {
    lista.classList.toggle("d-none");

    btn.textContent = lista.classList.contains("d-none")
        ? "Mostrar Noticias"
        : "Ocultar Noticias";
});
