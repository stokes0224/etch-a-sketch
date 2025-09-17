let grid = 16

const container = document.querySelector(".container")
const reset = document.querySelector(".reset")



function createDivs() {
    for (let i = 0, j = grid* grid; i < j; i++){
    const gridsq = document.createElement("div")
    container.appendChild(gridsq)
    gridsq.classList.add("grid")
    gridsq.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "black"
    })
}
}

createDivs()

reset.addEventListener("click", () => {
    const grids =document.querySelectorAll(".grid")
    grids.forEach((e) => e.style.backgroundColor = "white")
})
