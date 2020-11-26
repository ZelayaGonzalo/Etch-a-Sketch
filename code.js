const container = document.getElementById("container");

function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
   // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  }
  var gridPixels=container.querySelectorAll('div');
  gridPixels.forEach(pixel=>pixel.addEventListener('mouseover',changeColorGrid));
}
function changeColorGrid(){
    this.style.backgroundColor='#000000';
    this.classList.remove('grid-item');
}
  
    

makeGrid(100, 100);

