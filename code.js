let numberofGrids=16;
const container = document.getElementById("container");
let color=0;
let paintOnHover=false;
let slider=document.getElementById("myRange");

function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
   // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  }
  let gridPixels=container.querySelectorAll('div');
  gridPixels.forEach(pixel=>pixel.addEventListener('mouseover',changeColorGrid));
  gridPixels.forEach(pixel=>pixel.addEventListener('mousedown',start_stop_Painting));
}

function start_stop_Painting(){
  paintOnHover=!paintOnHover;
  

}

function erase(){
  let gridPixels=container.querySelectorAll('div');
  gridPixels.forEach(pixel=>pixel.style.backgroundColor="white");
}

function changeSizeofGrid(){
  if(numberofGrids!=slider.value){
    numberofGrids=slider.value;
    erase();
    makeGrid(numberofGrids,numberofGrids);
  }
 

}

function randomColor(){
  return '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

function changeColor(nColor){
  color=nColor;
  paintOnHover=false;
  return;
}

function changeColorGrid(){
  if(paintOnHover==true){
    switch(color){
      case 0:
        this.style.backgroundColor='#000000';
        this.classList.remove('grid-item');
        break;
      case 1:
        this.style.backgroundColor='#0000FF';
        this.classList.remove('grid-item');
        break;
      case 2:
        this.style.backgroundColor=randomColor();
        this.classList.remove('grid-item');
        break;  
      }
 
  }
  
    
}
  
    

makeGrid(numberofGrids,numberofGrids);


