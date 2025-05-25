
const grid = document.querySelector('.dot-grid')
const frag = document.createDocumentFragment()  // створюємо ФРАГМЕНТ для побудови щоб вставити в ДОМ дерево 

for (let i = 1; i <= 35; i++) {
    const dot = document.createElement('div')
    dot.classList.add('dot')
    frag.appendChild(dot)
}
grid.appendChild(frag)

const gridSecond = document.querySelector('.dot-grid-second')
const frag2 = document.createDocumentFragment()
for (let i = 1; i <= 48; i++) {
    const dot = document.createElement('div')
    dot.classList.add('dot-second')
    frag2.append(dot)
}
gridSecond.append(frag2)


const cols = 14
const rows = 21
total = rows * cols
const gridThird = document.querySelector('.dot-grid-third')
const frag3 = document.createDocumentFragment()
for (let i = 0; i < total; i++) {
    const dot = document.createElement('div')
    dot.classList.add('dot-third')
    const row = Math.floor(i / cols)
    if (row % 2 === 0) { dot.classList.add('offset') }
    frag3.append(dot)
}
gridThird.append(frag3)


const colsTwo = 12
const rowsTwo = 17
totalTwo = rowsTwo * colsTwo 
const gridFourth = document.querySelector('.dot-grid-fourth')
const frag4 = document.createDocumentFragment()
for (let i = 0; i < totalTwo; i++){
    const dot = document.createElement('div')
    dot.classList.add('dot-fourth')
    if (Math.floor(i / colsTwo) % 2 === 0) { dot.classList.add('offsetTwo') }
    frag4.append(dot)
}
gridFourth.append(frag4)


const gridFifth = document.querySelector('.dot-grid-fifth')
const frag5 = document.createDocumentFragment()
for (let i = 0; i < 20; i++){
    const dot = document.createElement('div')
    dot.classList.add('dot-fifth')
    frag5.append(dot)
}
gridFifth.append(frag5)
