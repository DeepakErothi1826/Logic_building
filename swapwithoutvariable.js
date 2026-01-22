let a =234;
let b =456;
console.log(`before swapping number: a = ${a} & b = ${b}`);

[a,b] = [b,a]; // destructuring assignment using for swapping

console.log(`After Swapping number : a = ${a} and b = ${b}`);

// another way to swap without variable

let x = 5;
let y = 10;
console.log(`before swapping number: x = ${x} & y = ${y}`);

x = x + y; // x now becomes 15
y = x - y;
x = x - y; // x becomes 5
console.log(`After Swapping number : x = ${x} and y = ${y}`);