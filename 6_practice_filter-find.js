const numbers = [3, 13, 7, 41, 30, 5, 2, 19];
const bigNumber = numbers.filter(x => x > 20);
const smallNumber = numbers.filter(x => x < 10);
// console.log(bigNumber);
// console.log(smallNumber);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const expensive = products.filter(x => x.price > 100);
// console.log(expensive);
const black = products.filter(x => x.color == 'black');
const findBlack = products.find(x => x.color == 'black');
// console.log(black);
// console.log(findBlack);
const pink = products.filter(x => x.color == "pink");
// console.log(pink);
const blue = products.filter(x => x.color == 'blue');
// console.log(blue);