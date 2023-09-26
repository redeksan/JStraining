const box = document.createElement('div')
box.id = 'box'
document.body.appendChild(box)

const minusTen = creatButton( 'Minus 10' , 'btnMinusTen')
const minus = creatButton( 'Minus' , 'btnMinus')
const reset = creatButton( 'Reset' , 'reset')
const plus = creatButton( 'Plus' , 'btnPlus')
const plusTen = creatButton( 'Plus 10' , 'btnPlusTen')

const counter = document.createElement("div")
counter.id = 'counter'
counter.innerText = 0
box.appendChild(counter)

function creatButton(name , id){
      const button = document.createElement('button')
      button.innerText = name
      button.id = id
      button.addEventListener('click', (event) => calculate(button.id))
      box.appendChild(button)
      return button
}

function calculate(btnId){
      let calculationActionResult = 0
      switch (btnId){
            case 'btnPlusTen' : calculationActionResult = +counter.innerHTML + 10
                  break
            case 'btnPlus' : calculationActionResult = +counter.innerHTML + 1
                  break
            case 'reset' : calculationActionResult = 0 
                  break
            case 'btnMinus' : calculationActionResult = +counter.innerHTML - 1
                  break
            case 'btnMinusTen' : calculationActionResult = +counter.innerHTML - 10
                  break
            default : console.log('button action undefined!')
      }
      counter.innerHTML = calculationActionResult > 0 ? calculationActionResult : 0
}









