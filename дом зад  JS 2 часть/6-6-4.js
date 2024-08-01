const size = 3;

for (let row = 0; row < size; row++) {
    let rowString = "";
    for (let col = 0; col < size; col++) {
        if ((row + col) % 2 === 0) {
            rowString += "x "; 
        } else {
            rowString += "o "; 
        }
    }
    console.log(rowString);
}