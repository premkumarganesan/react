// Traditional function
function add(num1, num2){
    return num1 + num2;
}
// Arrow
const subtract = (num1, num2) =>{
    return num1 - num2;
}
// Arrow with single param
const square = num =>{
    return num * num;
}

// Arrow with just return
const triple =()=> 3*3;

console.log('Add: ' + add(2,3));
console.log('Subract: ' + subtract(2,3));
console.log('Square: ' + square(2));
console.log('Tripled: ' + triple());