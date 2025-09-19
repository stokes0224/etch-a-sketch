let grid = 16;
let colorMode = "black";

const container = document.querySelector(".container");
const reset = document.querySelector(".reset");
const clear = document.querySelector(".clear");
const size = document.querySelector(".size");
const random = document.querySelector(".random");
const classic = document.querySelector(".classic");
const shade = document.querySelector(".shade");

function createDivs(grid) {
  for (let i = 0, j = grid * grid; i < j; i++) {
    const gridsq = document.createElement("div");
    container.appendChild(gridsq);
    gridsq.classList.add("grid");
    gridsq.style.width = `${100 / grid}%`;
    gridsq.style.height = `${100 / grid}%`;
    gridsq.addEventListener("mouseenter", (e) => {
      if (colorMode == "black") {
        e.target.style.backgroundColor = "black";
      } else if (colorMode == "random") {
        e.target.style.background =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
      } else if (colorMode == "shade") {
        let current = e.target.style.opacity || 0.1;
        if (current < 1) {
          current = Number(current) + 0.1;
          e.target.style.opacity = current;
          e.target.style.backgroundColor = "black";
        }
      }
    });
  }
}

createDivs(grid);

reset.addEventListener("click", () => {
  colorMode = "black";
  container.innerHTML = "";
  clearGrid();
  createDivs(16);
});

clear.addEventListener("click", () => {
  clearGrid();
});

size.addEventListener("click", () => {
  container.innerHTML = "";
  let newSize = prompt("Select grid size (Maximum 100)");
  if (newSize && !isNaN(newSize) && newSize <= 100) {
    grid = Number(newSize);
    createDivs(grid);
  } else {
    alert("Please enter a number between 1 and 100.");
    createDivs(16);
  }
});

random.addEventListener("click", () => {
  colorMode = "random";
});

classic.addEventListener("click", () => {
  colorMode = "black";
});

shade.addEventListener("click", () => {
  colorMode = "shade";
});

function clearGrid() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((e) => {
    e.style.backgroundColor = "white";
    e.style.opacity = "";
  });
}
