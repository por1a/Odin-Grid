console.log("JS loaded")

const gridButton = document.querySelector(".test-button");
const containerDiv = document.querySelector(".container");
let width, height, size, condition = 1;


function getSize() {  
    while (condition === 1) {
        size = prompt("Input preferred grid size: ", "16x16");
        size = size.split("x");
        width = Number(size[0]);
        console.log(width)
        height = Number(size[1]);
        console.log(height)
        // validate w, h
        if (isNaN(width) || isNaN(height)) {
            alert("Input is not valid!");
        } 
        else if (width > 100 || height > 100) {
            alert("Max size is 100x100!");
        }
        else {
            condition = 0;
        }
    }
}

function removeChildren() {
    while (containerDiv.firstChild) {
        containerDiv.firstChild.remove();
    };
}


function createGrid() {
    console.log("is it working?");
    getSize()
    if (containerDiv.firstChild) {
        removeChildren()
    }
    // add new columns according to height
    for (let i = 0; i < height; i++) {
        const newRow = document.createElement("div");
        newRow.setAttribute("class", "row");
        containerDiv.appendChild(newRow);
        
        // add new rows according to width
        for (let o = 0; o < width; o++) {
            const newSquare = document.createElement("div");
            newSquare.setAttribute("class", "square");
            newRow.appendChild(newSquare)
        };
    };
    // reset condition so getSize can be used again
    condition = 1;
}


gridButton.addEventListener("click", createGrid)



