const divBoard = document.getElementById("pixel-board");


function createPixelLine (tamanho) {
    for (let i = 0; i < tamanho; i += 1) {
    let divline = document.createElement('div');
    divline.className = "line"
    divBoard.appendChild(divline);
    }
}
createPixelLine(5);

const linha = document.getElementsByClassName("line");

function createBoard (linha){
    for (let i = 0; i < linha.length; i += 1){
        for (let i = 0; i < linha.length; i += 1) {
            let pixel = document.createElement("div");
            pixel.className = "pixel"
            linha[i].appendChild(pixel)}
    }
}

createBoard(linha);

function trocaClasse (event){
    const elementoSelected = document.querySelector('.selected');
    elementoSelected.classList.remove('selected');
    event.target.classList.add('selected');
}

document.getElementById("primeiraCor").addEventListener('click', trocaClasse);
document.getElementById("segundaCor").addEventListener('click', trocaClasse);
document.getElementById("terceiraCor").addEventListener('click', trocaClasse);
document.getElementById("quartaCor").addEventListener('click', trocaClasse);

