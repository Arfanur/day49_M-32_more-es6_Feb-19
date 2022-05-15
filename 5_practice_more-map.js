const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Bredy', 'Tom Solaiman'];
const fLength = friends.map(x => x.length);
// console.log(fLength);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const productNames = products.map(x => x.name);
const productPrice = products.map(x => x.price);
console.log(productNames, productPrice);

// products.map(x => console.log(x))
// products.forEach(x => console.log(x))