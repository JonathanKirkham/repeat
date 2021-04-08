let alphanumeric = prompt('Enter an Alphanumeric: '); // original Alphanumeric - prompting the user for the Alphanumeric
let repeater = prompt('Enter how many times to repeat by: '); // how many times the Alphanumeric should be repeated (prompting the user)
let str = '';

document.getElementById('alphanumeric').innerHTML = `Alphanumeric: ${alphanumeric}`; // displaying the Alphanumeric to the browser (index.html)
document.getElementById('repeater').innerHTML = `Repeater: ${repeater}`; // displaying the repeater to the browser (index.html)

function repeat(alphanumeric, repeater) {
    while (repeater >= 1) { // while condition is true do whatever is in the brackets
        str += alphanumeric; // str = str + Alphanumeric
        repeater--; // decrement the repeater (Alphanumeric - 1)
        /*
            i.e Alphanumeric is 5 && repeater is 5
            first iteration '' + 5 = '5' (4 iterations ;eft)
            second iteration '5' + 5 = '55' (3 iterations left)
            third iteration '55' + 5 = '555' (2 iterations left)
            fourth iteration '555' + 5 = '5555' (1 iteration left)
            fifth iteration '5555' + 5 = '55555'
            Final iteration loops ends
        */
    }
    if (str === '') { // Caused an infinite loop... Solution: changed while loop condition from !== 0 to >= 1
        document.getElementById('isZero').innerHTML = `Result: ${str} Empty String`; // displays empty string if repeater is 0
    } else if (isNaN(alphanumeric)) {
        document.getElementById('NaN').innerHTML = `Result: ${str}` // displays non numeric Alphanumericacters
    } else {
        document.getElementById('result').innerHTML = `Result: ${parseInt(str)}` // parses the string of numbers to numbers then displays to screen
    }
}

repeat(alphanumeric, repeater);