const box = document.createElement("div")
box.id = "box"
document.body.appendChild(box)

const plus = creatButton( 'Plus' , 'btnPlus')
const minus = creatButton( 'Minus' , 'btnMinus')

const counter = document.createElement("div")
counter.id = 'counter'
counter.innerText = 0
box.appendChild(counter)

function creatButton(name , id){
const button = document.createElement('button')
button.innerText = name
button.id = id
button.addEventListener('click', (event) => {
      calculate(button.id)
})
box.appendChild(button)
console.log(name)
return button
}

function calculate(btnId){
        if (btnId === 'btnPlus') return +counter.innerHTML++
        if (btnId === 'btnMinus') return +counter.innerHTML--

}





// console.log(box)
// console.log(plus)
// console.log(minus)
// console.log(counter)
// console.log(document.getElementsByTagName('button'))





