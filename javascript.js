const gridButton = document.createElement("button");
gridButton.classList.add("gridButton");
document.body.appendChild(gridButton);
gridButton.textContent = "Edit Grid";
gridButton.setAttribute("style", "font-size: 30px; margin: 10px; border-radius: 8px; border: 2px solid rgb(10, 184, 234); background-color: rgb(10, 184, 234); color: rgb(10, 0, 143)")

gridButton.addEventListener("click", gridPrompt);
gridButton.addEventListener("click", () => {
    const maincontainer = document.querySelector(".mainContainer");
    maincontainer.remove();
});
gridButton.addEventListener("click", () => {
    createGrid();
})

var gridNumber = 16;

function changeGridSize() {
    let gridSize = (500 / gridNumber);
    return(gridSize);
}

function gridPrompt() {
    var gridUser = prompt("How many squares per side should the new grid have?", "16");
    if (gridUser > 0 && gridUser <= 100) {
        gridNumber = `${gridUser}`;
        return gridNumber;
    } else if (gridUser > 100) {
        alert("The maximum number is 100.");
        gridNumber = 16;
        return gridNumber;
    } else {
        alert("Invalid. Try again.");
        gridNumber = 16;
        return gridNumber;
    }
};

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
}

function createGrid() {
    var num = gridNumber;
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("mainContainer");
    document.body.appendChild(mainContainer);
    document.body.setAttribute("style", "background-color: rgb(10, 0, 143); display: flex; flex-direction: column; align-items: center");
    mainContainer.setAttribute("style", "border: 1px solid rgb(10, 184, 234); width: min-content; display: flex; flex-direction: row; box-sizing: border-box");


    for (let i = 0; i < num; i++) {
        const container = document.createElement("div");
        container.classList.add("container");
        mainContainer.appendChild(container);

        for (let i = 0; i < num; i++) {
            var gridSquare = document.createElement("div");
            gridSquare.classList.add("gridSquare");
            container.appendChild(gridSquare);
            gridSquare.setAttribute("style", `border: 1px solid rgb(10, 184, 234); height: ${changeGridSize()}px; width: ${changeGridSize()}px; box-sizing: border-box`);
        }
    }

    const gridSquares = document.querySelectorAll(".gridSquare");

    gridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "rgb" + `(${(getRandom(0, 255))}, ${(getRandom(0, 255))}, ${(getRandom(0, 255))})`;
    });
});
};

createGrid();