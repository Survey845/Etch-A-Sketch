let dimensionButton = document.createElement("button");
document.body.appendChild(dimensionButton);
dimensionButton.textContent = "16x16";
dimensionButton.classList.add("dimension");

dimensionButton.addEventListener("click" ,() => {
    let pixelNumber = prompt("What should be the dimension of the pixel grid?: ");
    if(Number(pixelNumber)<=100 && Number(pixelNumber)>0){
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
                gridSquare.style.minHeight = `${squareSize}px`;
                gridSquare.style.width = `${squareSize}px`;
                gridSquare.style.opacity = "0";
                let bgColor = getRandomColor();
                gridSquare.addEventListener("mouseover", () => {
                    gridSquare.style.backgroundColor = bgColor;
                    let currentOpacity = parseFloat(gridSquare.style.opacity);
                    if(currentOpacity<1){
                        gridSquare.style.opacity = (currentOpacity+0.1).toFixed(1);
                    }
                })
            }
}
makeGrid();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }





















