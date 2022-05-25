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
