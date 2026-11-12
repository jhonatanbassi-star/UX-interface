//CÓDICO DO MODAL
let btnAjuda = document.querySelector(".botao-ajuda");
let btnAjuda = document.querySelector(".botao-fechar");
let btnAjuda = document.querySelector(".modal-fundo");
btnAjuda.addEventListener("click", abreModal);
btnFechar.addEventListener("click", fechaModal);
function abreModal() {
    abreModal.style.display = "block";
}
function fechaModal () {
    Modal.style.display = "none";
}
//TAMANHO DE FONTES
let tamanhoFonteAtual = 16;
const valorAdicionado = 2;
const valorSubtraido = 2;

