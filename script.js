function corAleatoria() {
  const red = parseInt(Math.random() * 255, 10);
  const green = parseInt(Math.random() * 255, 10);
  const blue = parseInt(Math.random() * 255, 10);
  return `rgb(${red}, ${green}, ${blue})`;
}

document.getElementById('primeiraCor').style.background = 'black';
document.getElementById('segundaCor').style.background = corAleatoria();
document.getElementById('terceiraCor').style.background = corAleatoria();
document.getElementById('quartaCor').style.background = corAleatoria();

function mudancaCor(event) {
  const selected = document.getElementsByClassName('selected')[0];
  event.target.style.backgroundColor = selected.style.backgroundColor;
  console.log(event.target);
}

const divBoard = document.getElementById('pixel-board');
function createLine(tamanho) {
  for (let i = 0; i < tamanho; i += 1) {
    const divline = document.createElement('div');
    divline.className = 'line';
    divBoard.appendChild(divline);
  }
}

function createPixel() {
  const linha = document.getElementsByClassName('line');
  for (let i = 0; i < linha.length; i += 1) {
    for (let index = 0; index < linha.length; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.border = '1px solid black';
      pixel.style.backgroundColor = 'white';
      pixel.addEventListener('click', mudancaCor);
      linha[i].appendChild(pixel);
    }
  }
}

function createBoard(tamanho) {
  createLine(tamanho);
  createPixel();
}

createBoard(5);

function trocaClasse(event) {
  const elementoSelected = document.querySelector('.selected');
  elementoSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

document.getElementById('primeiraCor').addEventListener('click', trocaClasse);
document.getElementById('segundaCor').addEventListener('click', trocaClasse);
document.getElementById('terceiraCor').addEventListener('click', trocaClasse);
document.getElementById('quartaCor').addEventListener('click', trocaClasse);

function limpar() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

const buttonLimpar = document.getElementById('clear-board');
buttonLimpar.addEventListener('click', limpar);

const buttonCriar = document.getElementById('generate-board');
const input = document.getElementsByTagName('input')[0];

function apagarBoard() {
  const line = document.getElementsByClassName('line');
  while (line[0] !== undefined) {
    line[0].remove();
  }
}

function criar() {
  if (input.value === '') {
    return alert('Board inválido!');
  } if (input.value > 0 && input.value < 5) {
    apagarBoard();
    createBoard(5);
  } else if (input.value > 50) {
    apagarBoard();
    createBoard(50);
  } else {
    apagarBoard();
    createBoard(input.value);
  }
}

buttonCriar.addEventListener('click', criar);
