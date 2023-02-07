const btnClear = document.querySelector('.btn-clear')
const result = document.querySelector('.calc-result')
const infoCalc = document.querySelector('.info-calc')

// Remove Result
const clearResult = () => {
    result.innerHTML = ''
}

// Remove All 
const removeCalc = () => {
   result.innerHTML = ''
   infoCalc.innerHTML = ''
}

// Show Digit Numbers and Expressions
const showNumber = (num) => {
    const number = document.querySelector('.calc-result').innerHTML
    document.querySelector('.calc-result').innerHTML = number + num
}


// Calculator Lógic
const calculate = () => {
    const expressionCalc = document.querySelector('.calc-result').innerHTML
    document.querySelector('.info-calc').innerHTML = expressionCalc
    
    if (!expressionCalc) {
        alert('Informe valores válidos!')
    }

    try {
        const result = eval(expressionCalc)
        document.querySelector('.calc-result').innerHTML = result
      } catch (error) {
        document.querySelector('.calc-result').innerHTML = 'Error'
      }
}