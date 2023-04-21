let redblock = document.querySelector('.redblock')
let yellowblock = document.querySelector('.yellowblock')


redblock.addEventListener('click', () => {
    redblock.style.backgroundColor = 'yellow'
    yellowblock.style.backgroundColor = 'red'
})

yellowblock.addEventListener('click', () => {
    redblock.style.backgroundColor = 'yellow'
    yellowblock.style.backgroundColor = 'red'
})

// let block = document.querySelector('.block')

// block.addEventListener('click', () => {
//     block.style.backgroundColor = "red"
// })

// block.addEventListener('dblclick', () => {
//     block.style.backgroundColor = "green"
// })

// let block = document.querySelector('.block')
// let button = document.querySelector('.button')

// button.addEventListener('click', (event) => {
//     block.classList.toggle('hidden')
// })

