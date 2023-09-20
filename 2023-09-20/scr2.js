let uInp = parseInt(prompt("Please type in a number to perform calculations with:")); //uInp = userInput
let sNum = 5.5 //sNum = standardNumber

let addition = uInp + sNum;
let subtraction = uInp - sNum;
let multiplication = uInp * sNum;
let division = uInp / sNum;

alert(
    `Calculations of your number are:\n
     Addition: ${uInp} + ${sNum} = ${addition}\n
     Subtraction: ${uInp} - ${sNum} = ${subtraction}\n
     Multiplication: ${uInp} * ${sNum} = ${multiplication}\n
     Division: ${uInp} / ${sNum} = ${division}
    `);