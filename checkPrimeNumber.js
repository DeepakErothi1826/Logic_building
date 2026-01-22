
PrimeNumber =(num) =>{
    let isprime = true;
    if(num <= 1){
        return "Number is not a prime Number"
    }
    for(let i=2; i<= num/2; i++){
        if(num % i ===0){
             isprime = false;
        }
        if(isprime){
            return `${num} is a prime number`;
        }
        else{
            return `${num} is not a prime number`;
        }
    }
}

console.log(PrimeNumber(14));
