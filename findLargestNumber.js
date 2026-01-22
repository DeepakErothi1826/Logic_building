
let a = 0;
let b = 54;
let c = 8;

largestNumber = (a, b, c) =>{
    if(a >=b && a>=c){
        return `a is largest number : ${a}`
    }
    else if(b >=a && b >=c){
        return `b is largest number : ${b}`
    }
    else{
        return `c is largest number : ${c}`
    }
}

console.log(`this is the largest number : ${largestNumber(a, b, c)}`);
console.log(Math.max(a, b, c));