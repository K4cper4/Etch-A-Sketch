const DEFAULT_COLOR = '#FCEDDA'
const DEFAULT_SIZE = 16
const DEFAULT_MODE = 'color'

const grid = document.querySelector(".grid-content")

let color = 'black'
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

//GRID -> Creator
function makeGrid(value)
{
    grid.style.setProperty('--grid-value', value)
    grid.style.setProperty('--grid-value', value)

    for (let i = 0; i < (value * value); i++)
    {
        const gridElement = document.createElement("div")
        gridElement.classList.add('grid-element')
        //gridElement.textContent = `${i + 1}`
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)
        grid.appendChild(gridElement)
    }
}

function reloadGrid(value)
{
    clearGrid()
    makeGrid(value)
}

function clearGrid()
{
    grid.innerHTML = ''
}
//testing grid
//makeGrid(10, 10)

//COLOR -> Properties
function changeColor(cell)
{
    if (cell.type === 'mouseover' && !mouseDown)
    {
        return
    }

    cell.target.style.backgroundColor = color
}

//RANGE -> Properties
let i = document.querySelector('input')
let o = document.querySelector('.output')

o.innerText = `${i.value} x ${i.value}`;

i.addEventListener('input', () =>
{
    o.innerText = `${i.value} x ${i.value}`;
    reloadGrid(i.value)
})

window.onload = () =>
{
    reloadGrid(DEFAULT_SIZE)
}