// DEFAULT VALUES
const DEFAULT_COLOR = '#000000'
const DEFAULT_SIZE = 16
const DEFAULT_MODE = "PENCIL"
const DEFAULT_COLOR_BACKGROUND = '#ffffff'
//
// INITIALIZING CANVAS
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

let mode = DEFAULT_MODE;
const actualMode = document.getElementById("actualMode")
actualMode.innerText = `MODE: ${mode}`

let CANVAS_WIDTH = DEFAULT_SIZE;
let CANVAS_HEIGHT = DEFAULT_SIZE;

let scale = Math.floor(1920 / (CANVAS_WIDTH * 3.5))
let currentWidth = CANVAS_WIDTH * scale;
let currentHeight = CANVAS_HEIGHT * scale;

canvas.width = CANVAS_WIDTH * scale
canvas.height = CANVAS_HEIGHT * scale

canvas.style.width = `${CANVAS_WIDTH * scale}px`
canvas.style.height = `${CANVAS_HEIGHT * scale}px`

ctx.imageSmoothingEnabled = false;

ctx.fillStyle = DEFAULT_COLOR_BACKGROUND
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = DEFAULT_COLOR
//
// SIZE CHANGER
const i1 = document.querySelector('#sizes')
const load = document.getElementById('change')
const o1 = document.querySelector('#outputSize')

o1.innerText = `${i1.value}px x ${i1.value}px`;

i1.addEventListener('input', () =>
{
    if (i1.value < 10)
    {
        o1.innerText = `0${i1.value}px x 0${i1.value}px`;
    }
    else
    {
        o1.innerText = `${i1.value}px x ${i1.value}px`;
    }
    
})
//
// CANVAS RELOAD
load.addEventListener('click', () =>
{
    mode = DEFAULT_MODE
    actualMode.innerText = `MODE: ${mode}`
    
    CANVAS_WIDTH = parseInt(i1.value);
    CANVAS_HEIGHT = parseInt(i1.value);
    scale = Math.floor(1920 / (CANVAS_WIDTH * 3.5))
    
    currentWidth = CANVAS_WIDTH * scale;
    currentHeight = CANVAS_HEIGHT * scale;

    canvas.width = CANVAS_WIDTH * scale
    canvas.height = CANVAS_HEIGHT * scale

    canvas.style.width = `${CANVAS_WIDTH * scale}px`
    canvas.style.height = `${CANVAS_HEIGHT * scale}px`

    size = i2.value * scale;

    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = color
    draw()
})
//
// PENCIL COLOR
const colorPicker = document.getElementById("colorPicker")

let color = DEFAULT_COLOR

colorPicker.oninput = function()
{
    color = this.value
}
//
// PENCIL
const pencil = document.getElementById("pencil")

pencil.addEventListener('click', () =>
{
    mode = DEFAULT_MODE
    actualMode.innerText = `MODE: ${mode}`
    console.log(mode)
})
//
// BACKGROUND COLOR
const colorBackground = document.getElementById("colorBackground")

let backgroundColor = DEFAULT_COLOR_BACKGROUND

colorBackground.oninput = function()
{
    backgroundColor = this.value
}
//
// RAINBOW COLOR
const rainbow = document.getElementById("rainbow")

rainbow.addEventListener('click', () =>
{
    mode = "RAINBOW"
    actualMode.innerText = `MODE: ${mode}`
    console.log(mode)
})
//
// ERASER
const eraser = document.getElementById("eraser")

eraser.addEventListener('click', () =>
{
    mode = "ERASER"
    actualMode.innerText = `MODE: ${mode}`
    console.log(mod)
})
//
// BRUSH SIZE
const i2 = document.querySelector('#brushSizes')
const brushSize = document.getElementById("brushSizes")
const o2 = document.getElementById("outputBrush")

let size = 1 * scale

o2.innerText = `${i2.value}px`;

brushSize.oninput = function()
{
    size = this.value * scale;
    o2.innerText = `${i2.value}px`;
}
//
// MOUSE FUNCTIONS
let isPressed = false;

window.onmousedown = function()
{
    isPressed = true;
}

window.onmouseup = function()
{
    isPressed = false;
}

window.onmousemove = function(event)
{
    getMouse(canvas, event)
}

function getMouse(canvas, event)
{
    const rect = canvas.getBoundingClientRect()

    currentX = Math.floor((event.clientX - rect.left) / scale) * scale;
    currentY = Math.floor((event.clientY - rect.top) / scale) * scale;
}
//
// SAVE BUTTON
const saveBtn = document.getElementById("download")
const tempCanvas = document.createElement("canvas")
const tempCtx = tempCanvas.getContext('2d')

saveBtn.addEventListener('click', function(event)
{
    tempCanvas.width = CANVAS_WIDTH;
    tempCanvas.height = CANVAS_HEIGHT;
    tempCtx.drawImage(canvas, 0, 0, CANVAS_WIDTH * scale, CANVAS_HEIGHT * scale, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    let download = document.getElementById('downloadLink')
    let image = tempCanvas.toDataURL("image/png").replace("image/png","image/octet-stream")

    //let img = new Image()
    download.setAttribute("href", image)
})
//
// CLEAR BUTTON
const clear = document.getElementById("clear")

clear.addEventListener('click', () =>
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = color
})
//
// MOUSE DRAWING & MODES
function draw()
{
    if (isPressed)
    {
        ctx.beginPath()
        if (mode === "PENCIL")
        {
            ctx.fillStyle = color
        }
        else if (mode === "RAINBOW")
        {
            let tempColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            //console.log(tempColor);
            ctx.fillStyle = tempColor;
        }
        else if (mode === "ERASER")
        {
            ctx.fillStyle = backgroundColor
        }
        //ctx.fillStyle = color
        ctx.fillRect(currentX, currentY, size, size);
        ctx.fill()
    }

    window.requestAnimationFrame(draw)
}

draw()