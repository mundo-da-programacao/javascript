let textarea = document.getElementById("textarea");
let restante = document.getElementById("restante");
let maximo = 250;

textarea.addEventListener('input', function () {
    
    let restanteCaractere = textarea.value.length;
    textarea.maxLength = 250;
    restante.textContent = restanteCaractere + "/" + maximo + " caracteres restantes.";
    if (restanteCaractere >= maximo) {
        restante.style.color = "red"
        textarea.style.borderColor = "red"
    } else {
        restante.style.color = ""
        textarea.style.borderColor = ""
    }
});
