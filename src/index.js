let digit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
let different = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

module.exports = function toReadable (number) {
    return (number === 0) ? 'zero' : hungred(number)
}

function hungred (number) {
    if (number > 99) {
        if (number % 10 === 0 && number % 100 === 0) {
            return digit[Math.floor(number / 100)] + ' hundred'
        } else if (number % 10 === 0) {
            return digit[Math.floor(number / 100)] + ' hundred ' + dozens[Math.floor(number / 100) % 10]
        } else {
        return digit[Math.floor(number / 100)] + ' hundred ' + tens(number % 100)
        }
    } else {
        tens(number)
    }
} 

function tens (number){
    // if (number < 10) {
    //     ones(number)
    // } else 
    if (number >=10 && number < 20) {
        return different[number % 10]
    } else if (number >= 20) {
        return dozens[Math.floor(number / 10)] + ' ' + digit[number % 10]
     } 
    else {
        digit[number]
    }
}

function ones (number){
    return digit[number]
}
