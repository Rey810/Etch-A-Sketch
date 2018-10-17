const container = document.querySelector('.container');
const buttons = document.querySelectorAll('input');
const colours = document.querySelectorAll('button');
const reset = document.querySelector('.reset');
const instr = document.querySelector('.howto');

instr.addEventListener('click', function() {
  console.log("How To");
  window.alert("It's pretty easy - choose how many blocks you'd like in your art space, pick a colour, and get creative! Note: Your brush will always be in contact with the canvas.")
})

reset.addEventListener('click', function() {
  console.log("Hello!");
  window.confirm("You want to start over? Choose your grid size and get your art on :)")
});

console.log(colours);

let WINDOW_SIZE = 500;
let divsArray = [];
let gridSize = 16;
let origColour = 'grey';
let newColour = 'black';

createGrid();

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    gridSize = buttons[i].value;
    deleteGrid();
    createGrid();
  });
}

for (let i = 0; i < colours.length; i++) {
  colours[i].addEventListener('click', function() {
    newColour = colours[i].value;
  })
}

function deleteGrid(){
  while (container.firstChild){
    container.removeChild(container.firstChild);
  }
}

function createGrid(){
  console.log(gridSize);
  let divSize = WINDOW_SIZE / (Math.sqrt(gridSize)) - 2;
    for(i = 0; i < gridSize; i++){
      divsArray[i] = document.createElement('div');
      divsArray[i].classList.add('blocks');
      divsArray[i].style.height = divSize + 'px';
      divsArray[i].style.width = divSize + 'px';
      divsArray[i].addEventListener('mouseover', addColour);
      container.appendChild(divsArray[i]);

    }
  }

function addColour(e){
  if (e.target.className == 'blocks'){
  e.target.style.background = newColour;
  }
}
