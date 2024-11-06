// Setting up database for array
let sequence = [1,2,3,4,5];

// outputs the first value in the array
console.log(sequence[0]);

// outputs the last value in the array
console.log(sequence[4]);

// I had to utilize a number down as with arrays the starting number is 0

// Loop for containing a console.log
for (let i = 0; i < sequence.length; i++ ){
    console.log(sequence[i])
}

// utilizing the push method to add 5 values to array
sequence.push(6);
sequence.push(7);
sequence.push(8);
sequence.push(9);
sequence.push(10);

// The contents of the array did not show as there is no method running with the updated database

// Loop for containing a console.log (testing method to demonstrate values were placed in array)
for (let i = 0; i < sequence.length; i++ ){
    console.log(sequence[i])
}

sequence.pop();
sequence.pop();
sequence.pop();

// Loop for containing a console.log (testing method to demonstrate values were removed from array)
for (let i = 0; i < sequence.length; i++ ){
    console.log(sequence[i])
}

// The contents in my array are now numbers 1-7 as the last three values were removed from array

