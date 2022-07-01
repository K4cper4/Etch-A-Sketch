const DEFAULT_COLOR = '#FCEDDA'
const DEFAULT_SIZE = 16
const DEFAULT_MODE = 'color'

/*
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
let i = document.querySelector('#sizes')
let o = document.querySelector('#output')

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

//DOWNLOAD PICTURE -> Alpha Testing -> Maybe be deleted in future
const download = document.querySelector('#download')

function doCapture() {
    html2canvas(document.getElementById('download').then(function (canvas) {
        console.log(canvas.toDataURL("image/jpeg", 0.9))
    }))
}

doCapture()
*/

const canvas = document.getElementById('canvas')

const ctx = canvas.getContext('2d');



/*let canvasBounds = canvas.getBoundingClientRect();

let coord = 
{
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0
}

document.addEventListener('mousedown', start);
document.addEventListener('mouseup', stop);

window.addEventListener('resize', resize);

resize()

function resize()
{
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

function reposition(event)
{
    let bounds = canvas.getBoundingClientRect();
    coord.x = event.pageX - bounds.left - scrollX;
    coord.y = event.pageY - bounds.top - scrollY;
    coord.x /= bounds.width;
    coord.y /= bounds.height;

    coord.x *= canvas.width;
    coord.y *= canvas.height;
}

function start(event)
{
    document.addEventListener('mousemove', draw);
    reposition(event);
}

function stop()
{
    document.removeEventListener('mousemove', draw);
}

function draw(event)
{
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = "black";
    ctx.moveTo(coord.x, coord.y);
    reposition(event);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();
}*/