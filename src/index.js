let digit = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
let different = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

module.exports = function toReadable (number) {
    return (number === 0) ? 'zero' : hundred(number)
}

function hundred (number) {
    let getHundred = Math.floor(number / 100) - 1
    let modFrom100 = number % 100
    if (number > 99) {
        if (modFrom100 === 0) return `${digit[getHundred]} hundred`
        else if (modFrom100 % 10 === 0) return `${digit[getHundred]} hundred ${dozens[Math.floor(modFrom100 / 10) - 1]}`
        else return `${digit[getHundred]} hundred ${tens(modFrom100)}`
    } else {
        return tens(number)
    }
} 

function tens (number) {
    let getDozens = Math.floor(number / 10) - 1
    let modFrom10 = number % 10
    if (number >= 10 && number < 20) {
        return different[modFrom10]
    } else if (number >= 20) {
        if (modFrom10 === 0) return dozens[getDozens]
        else return `${dozens[getDozens]} ${digit[modFrom10 - 1]}`
    } else return digit[number - 1]
}
