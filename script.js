let dimensionButton = document.createElement("button");
document.body.appendChild(dimensionButton);
dimensionButton.textContent = "16x16";
dimensionButton.classList.add("dimension");

dimensionButton.addEventListener("click" ,() => {
    let pixelNumber = prompt("What should be the dimension of the pixel grid?: ");
    if(Number(pixelNumber)<=100){
        dimensionButton.textContent = pixelNumber + "x" + pixelNumber;
        pixelNumber = Number(pixelNumber);
        makeGrid(pixelNumber);
    }
})
const container = document.querySelector(".container")

function makeGrid(num=16){
        container.innerHTML = "";
        const squareSize = Math.floor(500/num);
        for(i=0;i<num*num;i++){
                let gridSquare = document.createElement("div");
                container.appendChild(gridSquare);
                gridSquare.classList.add("square");
                gridSquare.style.height = `${squareSize}px`;
                gridSquare.style.width = `${squareSize}px`;
                gridSquare.addEventListener("mouseover", () => {
                    gridSquare.style.backgroundColor = "black";
                })
                gridSquare.addEventListener("mouseout", () => {
                    gridSquare.style.backgroundColor = "white";
                })
            }
}
makeGrid();





















