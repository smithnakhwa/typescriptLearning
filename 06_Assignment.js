console.log("============= definite Assignment Assertion ===========");
var dice; //If we don't use definint assignment assertion then compiler will throw an error but the code will run even.
function rollDice() {
    dice = (Math.floor(Math.random() * 6) + 1);
    return dice;
}
console.log("The number is ".concat(dice));
console.log(" ");
console.log("=========Method overload==========");
function show(check) {
    if (typeof check == 'string') {
        console.log("".concat(check, " and typeof").concat(typeof check));
    }
    else if (typeof check === 'number') {
        console.log("".concat(check * 10, " and ").concat(typeof check));
    }
    else if (Array.isArray(check)) {
        console.log(check.map(function (element) { return element + "mind"; }));
    }
}
show(123);
show("smith");
show(["Smith", "Mind"]);
