const btnClear = document.querySelector('.btn-clear')
const result = document.querySelector('.calc-result')
const infoCalc = document.querySelector('.info-calc')

const clearResult = () => {
    result.innerHTML = '0'
}

const removeCalc = () => {
   result.innerHTML = '0'
   infoCalc.innerHTML = ''
}