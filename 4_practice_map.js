const numbers = [4, 6, 8, 10];
const output = [];

const doubleit = number => number * 2;

for (number of numbers) {
    const result = doubleit(number);
    output.push(result);
}
console.log(output);

const output2 = numbers.map(x => x * 2);
console.log(output2);

const square = numbers.map(x => x * x);
console.log(square);