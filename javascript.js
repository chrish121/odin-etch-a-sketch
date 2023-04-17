function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
}

console.log(`(${(getRandom(0, 255))}, ${(getRandom(0, 255))}, ${(getRandom(0, 255))})`);

const mainContainer = document.createElement("div");
mainContainer.classList.add("mainContainer");
document.body.appendChild(mainContainer);
mainContainer.setAttribute("style", "border: 1px solid black; height: 194px; width: 224px; display: flex; flex-direction: row");

for (let i = 0; i < 16; i++) {
    const container = document.createElement("div");
    container.classList.add("container");
    mainContainer.appendChild(container);
    container.setAttribute("style", "border: 1px solid black; height: 192px; width: 12px");

    for (let i = 0; i < 16; i++) {
        var gridSquares = document.createElement("div");
        gridSquares.classList.add("gridSquares");
        container.appendChild(gridSquares);
        gridSquares.setAttribute("style", "border: 1px solid black; height: 10px; width: 10px");
    }
}

const gridSquare = document.querySelectorAll(".gridSquares");

gridSquare.forEach((gridSquare) => {
    gridSquare.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "rgb" + `(${(getRandom(0, 255))}, ${(getRandom(0, 255))}, ${(getRandom(0, 255))})`;
        setTimeout (() => {
            event.target.style.backgroundColor = "";
        }, 500);
    }, false);
});