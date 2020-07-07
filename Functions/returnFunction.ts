function multiplication(number1:number,number2:number): number{
    var total = number1 * number2;
    return total;
}

function calculateProm(note1:number,note2:number,note3:number):number{
    var total:number =(note1 + note2 + note3) /3
    return total;
}


var numberResult:number = 0;

numberResult = multiplication(5,10);

console.log(numberResult);


var prom:number = 0;
prom = calculateProm(50,70,80);
console.log(prom);

