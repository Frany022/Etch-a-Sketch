const body = document.body;
let container = document.querySelector(".container");
let btn = document.querySelector(".change-size");

let gridSize = 16;

drawGrid();
etchGrid();

function drawGrid(){
    for(var i = 0; i < gridSize ** 2; i++){
        let grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.width = container.offsetWidth / gridSize + 'px';
        grid.style.height = container.offsetHeight / gridSize + 'px';

        container.appendChild(grid);
    }
    
}

function removeGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function etchGrid(){
    let grid = document.querySelectorAll('div');
    for(var i = 0; i < grid.length; i++){
        grid[i].addEventListener('mouseover',  function() {
            grid[i].style.backgroundColor = "rgb("+Math.floor(Math.random()*255)+","+ Math.floor(Math.random()*255)+","+ Math.floor(Math.random()*255)+")";
        });
    }
}

btn.addEventListener("click", function() {
    gridSize = parseInt(prompt("Choose a number between 1 and 100"));
    if(gridSize < 101 && gridSize > 0){
        removeGrid();
        drawGrid();
        etchGrid();
        console.log(gridSize);
    }
    else{
        alert("the size should be between 1 and 100 try again");
    }
})