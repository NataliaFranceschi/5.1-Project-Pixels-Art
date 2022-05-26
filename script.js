document.getElementById('primeiraCor').style.background = 'black';
document.getElementById('segundaCor').style.background = 'red';
document.getElementById('terceiraCor').style.background = 'blue';
document.getElementById('quartaCor').style.background = 'green';

const divBoard = document.getElementById('pixel-board');

function createPixelLine(tamanho) {
  for (let i = 0; i < tamanho; i += 1) {
    const divline = document.createElement('div');
    divline.className = 'line';
    divBoard.appendChild(divline);
  }
}
createPixelLine(5);

const linha = document.getElementsByClassName('line');

function createBoard(linha) {
  for (let i = 0; i < linha.length; i += 1) {
    for (let i = 0; i < linha.length; i += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white'
      linha[i].appendChild(pixel);
    }
  }
}

createBoard(linha);

function trocaClasse(event) {
  const elementoSelected = document.querySelector('.selected');
  elementoSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

document.getElementById('primeiraCor').addEventListener('click', trocaClasse);
document.getElementById('segundaCor').addEventListener('click', trocaClasse);
document.getElementById('terceiraCor').addEventListener('click', trocaClasse);
document.getElementById('quartaCor').addEventListener('click', trocaClasse);

const pixel = document.getElementsByClassName('pixel');

for(let index = 0; index < pixel.length; index += 1) {
pixel[index].addEventListener('click', mudancaCor);}

function mudancaCor(event) {
  const selected = document.getElementsByClassName('selected')[0];
  event.target.style.backgroundColor = selected.style.backgroundColor;
}

const buttonLimpar = document.getElementById("clear-board");
buttonLimpar.addEventListener('click', function(){
  const pixel = document.getElementsByClassName('pixel');
  for (i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white'
  }
});

const buttonCriar = document.getElementById("generate-board");
const input = document.getElementsByTagName('input')[0];

buttonCriar.addEventListener('click', criar)
function criar() {
    if (input.value === ''){
        return alert('Board inválido!')
    } else if (parseInt(input.value) > 0) {
        createPixelLine(parseInt(input.value));
    }
}
