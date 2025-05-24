
const grid = document.querySelector('.dot-grid')
for (let i = 1; i <= 35; i++) {
    const dot = document.createElement('div')
    dot.classList.add('dot')
    grid.append(dot)
}

const gridSecond = document.querySelector('.dot-grid-second')
for (let i = 1; i <= 48; i++) {
    const dot = document.createElement('div')
    dot.classList.add('dot-second')
    gridSecond.append(dot)
}

const cols = 14
const rows = 21
total = rows * cols
const gridThird = document.querySelector('.dot-grid-third')
for (let i = 0; i < total; i++) {
    const dot = document.createElement('div')
    dot.classList.add('dot-third')
    const row = Math.floor(i / cols)
    if (row % 2 === 0) { dot.classList.add('offset') }
    gridThird.append(dot)
}

const colsTwo = 12
const rowsTwo = 17
totalTwo = rowsTwo * colsTwo 
const gridFourth = document.querySelector('.dot-grid-fourth')
for (let i = 0; i < totalTwo; i++){
    const dot = document.createElement('div')
    dot.classList.add('dot-fourth')
    if (Math.floor(i / colsTwo) % 2 === 0) { dot.classList.add('offsetTwo') }
    gridFourth.append(dot)
}

const gridFifth = document.querySelector('.dot-grid-fifth')
for (let i = 0; i < 20; i++){
    const dot = document.createElement('div')
    dot.classList.add('dot-fifth')
    gridFifth.append(dot)
}