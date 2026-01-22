
evenOddNumbers = (num)=>{
    if( num % 2 ===0){
        return "Even Number";
    }
    else{
        return "Odd Number";
    }
}

console.log(`5 is Even or odd : it is ${evenOddNumbers(5)}`);
