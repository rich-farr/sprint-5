// Exercise 1: Hash Triangle
for (var hash = "#"; hash.length < 8; hash+= "#") {
  console.log(hash);
};

// Exercise 2: FizzBuzz

for (var i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    }
      else console.log(i);
};

// Exercise 3: Chess Board
var output = "";
var size = 8;
for (var i = 0; i < size; i++) {
  for (var j = 0; j < size/2; j++) {
      if (i % 2 === 0) {
          output += '#' + " ";
        } else output += " " + "#";
  }
  output += '\n';
};
console.log(output);