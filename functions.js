// Function Declaration/definition
// n = parameter
// function body()
// without return prints "undefined"

function double(n){
    return n+2;
}
// function call
// argument = 10
console.log(double(10));

// 2 ways to exit function
function triple(n) {
    console.log("Hi");

    if(n>2){
        return 35;
    }

    console.log("Hi");
    console.log("Hi");
    console.log("Hi");
    console.log("Hi");
}
console.log(triple(10));
console.log(triple(1));

// Arrow functions
const sum = (x, y) => {
    return x + y;
};
console.log(sum(3,2));

// Single line
const mul = (x,y) => x*y;
console.log(mul(4,2));