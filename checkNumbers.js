
checkNumbers = (num) =>{
    if(num ===0){
        return "Number is Zero";
    }
    else if (num >0){
        return "Number is Positive";
    }
    else{
        return "Number is Negative";
    }
}
console.log();

console.log(`Check number 0 : ${checkNumbers(0)}`);
console.log(`Check number 34 : ${checkNumbers(34)}`);
console.log(`Check number -2 : ${checkNumbers(-2)}`);
