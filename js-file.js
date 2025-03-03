// Etch-a-Sketch js

// Global Vars
// Dimensions of grid currently set
let currDim = 16;

// Create grid
function makeGrid(dims){
    // select container
    const container = document.getElementById("container");
    // remove is anys squares are inside
    container.innerHTML = ""

    //vars
    const gridSize = 480;
    const squareSize = gridSize/dims;

    // create dims * dims amount of squares
    for(let i = 0; i < dims * dims; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.height = squareSize + 'px';
        square.style.width = squareSize + 'px';
        square.style.backgroundColor = "white";

        // Event to change color on mouseover
        square.addEventListener("mouseover", function(){
            square.style.backgroundColor = "black";
        });


        container.appendChild(square);
    }
    return;
}


// Call to create grid
// Note: Could be changed to a dynamic input
makeGrid(currDim);

//Change grid size
const changeDim = document.getElementById("dimensions");
changeDim.addEventListener("click", function(){
    let validInput = false;
    let dim = 0;

    // prompt user until valid input
    while(validInput == false){
        //prompt user for number
        dim = parseInt(prompt("Enter dimension of grid."));
        //check within the max and min
        if(dim > 100 || dim < 1){
            alert("Error: Out of bounds (1 - 100)");
        }else{
            validInput = true;
        }
    }

    // Update currDim and call for makeGrid
    currDim = dim;
    makeGrid(currDim);
});
