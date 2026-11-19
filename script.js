
//CODIGO MODAL
let btnAjuda = document.querySelector (".botao-ajuda");
let btnAjuda = document.querySelector (".botao-fechar");
let btnAjuda = document.querySelector (".modal-fundo");
btnAjuda.addEventListener ("click", abreModal);
btnFechar.addEventListener ("click", fechaModal);
function abreModal () {
abreModal.style.display = "block";

}

function fechaModal () {
Modal.style.disṕlay = "none";

}

//TAMANHO DE FONTES
let tamanhoFonteAtual=16;
const valorAdicionado=2;
const valorSubtraido=2;
let btnAumentaFonte= document.getElementByld("btnAumenta Texto");
let btnDiminuiFonte= document.getElementByld("btnDiminui Texto");

function aumentaFonte(){
tamanhoFonteAtual = tamanhoFonteAtual + valorAdicionado;
document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}


function DiminuiFonte(){
tamanhoFonteAtual = tamanhoFonteAtual - valorSubtraido;
document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}



//LEITURA DE TELA
let lendo=false;

let btnLeitura = document.querySelector(".botao-leitura");
btnLeitura.addEventListener("click", lerEmVozAlta);

function lerEmVozAlta(){
//se ja esta lendo
if(lendo==true){
//se estiver pausado
if(speechSynthesis.paused==true){
//continua onde parou
speechSynthesis.resume();
} else{
//pausa
speechSynthesis.pause();
}
}
return;


let conteudo = document.querySelector("main");
let texto = conteudo.innerText;

let fala = new SpeechSynthesisUtterance(texto);
fala.lang = "pt-BR";
fala.onend = finalizarLeitura;
lendo = true;
speechSynthesis.cancel();
speechSynthesi.speack();
}

function finalizarLeitura(){
lendo = false;
}
