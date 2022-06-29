const DEFAULT_COLOR = '#FCEDDA'

const grid = document.querySelector(".grid-content")

let color = 'black'
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function makeGrid(rows, cols)
{
    grid.style.setProperty('--grid-rows', rows)
    grid.style.setProperty('--grid-cols', cols)

    for (let i = 0; i < (rows * cols); i++)
    {
        const gridElement = document.createElement("div")
        gridElement.classList.add('grid-element')
        gridElement.textContent = `${i + 1}`
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)
        grid.appendChild(gridElement)
    }
}

makeGrid(20, 20)

function changeColor(cell)
{
    if (cell.type === 'mouseover' && !mouseDown)
    {
        return
    }

    cell.target.style.backgroundColor = color
}