const container = document.querySelector(".container");
container.setAttribute(
  "style",
  "display:grid; grid-template-rows : repeat(16,1fr); grid-template-columns : repeat(16,1fr); padding:0px; width: 600px; height:600px;"
);
for (let j = 0; j < 256; j++) {
  const cell = document.createElement("div");
  cell.setAttribute("style", "border: 0.5px solid black;");
  cell.classList.add("cell");
  container.appendChild(cell);
}

container.addEventListener("mouseover", (event) => {
  // Check if the mouse is over one of the div cells
  if (event.target.matches("div")) {
    event.target.style.backgroundColor = "black";
    console.log("hi");
  }
});

const button = document.querySelector(".pixel");
button.addEventListener("click", () => {
  const dimension = prompt("Enter your specify pixels");
  if (dimension > 100 || dimension < 0 || !/^\d+$/.test(dimension)) {
    alert("Please enter new number");
  } else {
    // clear previous cells
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    // set grid-template-columns to adjust to number of cells
    container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    // create new cells
    for (let j = 0; j < dimension * dimension; j++) {
      const cell = document.createElement("div");
      cell.setAttribute("style", "border: 0.5px solid black;");
      cell.classList.add("cell");
      container.appendChild(cell);
    }
  }
});
