document.getElementById('primeiraCor').style.background = 'black';
document.getElementById('segundaCor').style.background = corAleatoria();
document.getElementById('terceiraCor').style.background = corAleatoria();
document.getElementById('quartaCor').style.background = corAleatoria();

function corAleatoria() {
  const red = parseInt(Math.random() * 255 , 10);
  const green = parseInt(Math.random() * 255 , 10);
  const blue = parseInt(Math.random() * 255 , 10);
  return `rgb(${red}, ${green}, ${blue})`;
}

const divBoard = document.getElementById('pixel-board');

function createBoard(tamanho) {
    for (let i = 0; i < tamanho; i += 1) {
      const divline = document.createElement('div');
      divline.className = 'line';
      divBoard.appendChild(divline);
    }
    const linha = document.getElementsByClassName('line');
    for (let i = 0; i < linha.length; i += 1) {
    for (let index = 0; index < linha.length; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.border = '1px solid black';
      pixel.style.backgroundColor = 'white';
      linha[i].appendChild(pixel);
    }
  }
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

const pixel = document.getElementsByClassName('pixel');

for (let index = 0; index < pixel.length; index += 1) {
pixel[index].addEventListener('click', mudancaCor);
}

function mudancaCor(event) {
  const selected = document.getElementsByClassName('selected')[0];
  event.target.style.backgroundColor = selected.style.backgroundColor;
}

const buttonLimpar = document.getElementById('clear-board');
buttonLimpar.addEventListener('click', function(){
  const pixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white'
  }
});

const buttonCriar = document.getElementById('generate-board');
const input = document.getElementsByTagName('input')[0];

buttonCriar.addEventListener('click', criar);
function criar() {
    
    if (input.value === '') {
        return alert('Board inválido!')
    } else if (input.value > 0 && input.value < 5 ) {
      const line = document.getElementsByClassName('line');
      for (let i = 0; i < 5; i += 1) {
      line[0].remove()}
      createBoard(5); 
    } else if (input.value > 50) {
      const line = document.getElementsByClassName('line');
      for (let i = 0; i < 5; i += 1) {
      line[0].remove()}
      createBoard(50);
    } else {
      const line = document.getElementsByClassName('line');
      for (let i = 0; i < 5; i += 1) {
      line[0].remove()}
      createBoard(input.value)
    }
}
