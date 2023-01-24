console.log(`============= definite Assignment Assertion ===========`);
var dice !:number;//If we don't use definint assignment assertion then compiler will throw an error but the code will run even.

function rollDice(){
    dice=(Math.floor(Math.random()*6)+1);
    return dice;
}
console.log(`The number is ${dice}`);
console.log(` `);
console.log(`=========Method overload==========`);
function show(message:string);
function show(message:number);
function show(message: string[]); 
function show(check:any)
{
    if(typeof check=='string')
    {
        console.log(`${check} and typeof${typeof check}`);
               
    }
    else if(typeof check==='number')
    {
        console.log(`${check * 10} and ${ typeof check}`);
    }
    else if(Array.isArray(check))
    {
          console.log(check.map(element=>{return element+"mind"}));
          
    }
}
show(123);
show("smith");
show(["Smith","Mind"]);



