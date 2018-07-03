
Exercise 1 - Looping A Triangle


for (let char = "#"; char.length < 8; char += "#")  {
    console.log(char);
}



Exercise 2 - Fizzbuzz


for (let num = 1; num < 100; num ++)  {
    result = "";
    if (num % 3 == 0) result += "Fizz";
    if  (num % 5 == 0) result += "Buzz";
    console.log (result || num);
}



Exercise 3 - Chessboard


let bindSize = 8;

let emptyStr = "";

for (let y = 0; y < bindSize; y ++) {
    for (let x = 0; x < bindSize; x++) {
        if ((x + y) % 2 == 0) {
            emptyStr += " ";
        }   else  {
            emptyStr += "#";
        }  
    }
    emptyStr+= "\n";
}
console.log(emptyStr);
