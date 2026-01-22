let a = 50;
 let b = 34;
 console.log(`Before swapping : a=${a} and b=${b}`);
 
    //swapping logic
    let swapping = a;
    a = b;
    b = swapping;

    console.log(` after swapping : a=${a} and b=${b}`);
    
    // using destructuring assignment
    let x =100;
    let y =230;
    console.log(`Before swapping : x=${x} and y=${y}`);
    [x,y]  = [y,x];
    console.log(` after swapping : x=${x} and y=${y}`);