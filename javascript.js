const gridButton = document.createElement("button");
gridButton.classList.add("gridButton");
document.body.appendChild(gridButton);
gridButton.textContent = "Edit Grid";
gridButton.setAttribute("style", "font-size: 24px; margin: 10px")

gridButton.addEventListener("click", () => {
    var userGrid = prompt("How many squares per side should the new grid have?");
    if (userGrid <= 100) {
        var gridNumber = userGrid;
    } else {
        alert("The maximum number is 100.");
    }
})

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
}

console.log(`(${(getRandom(0, 255))}, ${(getRandom(0, 255))}, ${(getRandom(0, 255))})`);

var gridNumber = 16;
a = 10;

const mainContainer = document.createElement("div");
mainContainer.classList.add("mainContainer");
document.body.appendChild(mainContainer);
mainContainer.setAttribute("style", "border: 1px solid black; width: min-content; display: flex; flex-direction: row");


for (let i = 0; i < gridNumber; i++) {
    const container = document.createElement("div");
    container.classList.add("container");
    mainContainer.appendChild(container);

    for (let i = 0; i < gridNumber; i++) {
        var gridSquares = document.createElement("div");
        gridSquares.classList.add("gridSquares");
        container.appendChild(gridSquares);
        gridSquares.setAttribute("style", "border: 1px solid black; height: 10px; width: 10px");
    }
}console.log((`${gridNumber}`*100) + `px`)

const gridSquare = document.querySelectorAll(".gridSquares");

gridSquare.forEach((gridSquare) => {
    gridSquare.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "rgb" + `(${(getRandom(0, 255))}, ${(getRandom(0, 255))}, ${(getRandom(0, 255))})`;
        event.target.style.opacity += "1";
        setTimeout (() => {
            event.target.style.backgroundColor = "";
            event.target.style.opacity = "";
        }, 500);
    }, false);
});