//Loop through all numbers from 1 to 100
for(let num = 1; num <= 100; num++){
    console.log(num)
}
//If a number is divisible by 3, log “Fizz.”

for (let x = 1; x <= 100; x++) {
    if (x % 3 ==0 && x % 5 == 0){
        console.log('Fizz Buzz');

    } else if(x % 3 ==0){
        console.log('Fizz');

    } else if(x % 5 ==0) {
        console.log('Buzz');

    } else{
        console.log(x);
    }
}
// Part 2 - Prime number

for (let n = 5; n <= 12; n++) {
    let isPrime = true;

    for (let i = 2; i < n; i++) {
        // i = 2, 3, 4
        if (n % i == 0) {
            isPrime = false; // not a prime number
            break;
        }
    }

    if (isPrime) {
        console.log(`${n} is a prime number.`);
    }

}

//Part 3
const data = `Index, Mass (Kg), Spring 1 (m), Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`
//Split in rows
const rows = data.split('\n');
// Loop through each row
for (let row of rows) {
    //Split each rows into cells
    const cells = row.split(',');
    console.log(cells[0], cells[1], cells[2], cells[3]);
}
// Part3
// Feeling Loopy

const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26\n"


let currentCell = 1;
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';

// loop over the string
for (let i = 0; i < csv.length; i++) {
    // console.log(csv[i]);
 
    // store each cell in a variable

    if (csv[i] === ","){
        // if is a comma move to next cell
        currentCell++

    } /*else if (csv[i] === "\n") {
        // if is a \n move to next row
        console.log(cell1, cell2, cell3, cell4);
        currentCell = 1;
        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';

    } else {
        if (currentCell === 1) {
            cell1 += csv[i];
        } else if (currentCell === 2) {
            cell2 += csv[i]
        } else if (currentCell === 3) {
            cell3 += csv[i];
        } else if (currentCell === 4) {
            cell4 += csv[i];
        }
    }

}
*/