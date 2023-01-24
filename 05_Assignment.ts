console.log(`=========Union Type========`);
var rollNo:number | string;
rollNo=10;
console.log(`rollNo:== ${rollNo}`);

rollNo="ten";
console.log(`rollNo:== ${rollNo}`);
console.log(" ");;
console.log(`==========class parameter propertie===========`);
class Employee{
 constructor(public emp_id:number,public emp_name:string)
 {

 }
}
const emp1=new Employee(11,"Smith");

console.log(emp1);
console.log(" ");
console.log(`============Intersection type==============`);
type Person={
    ename:string;
}
type Email={
    email:string;
}
type Phone = {
    phone:string;
}
type contactDetais=
& Person
& Email
& Phone;
function contact(details: contactDetais)
{
    console.log(`Dear "${details.ename}" I hope you have received our email at "${details.email}", We will call you on "${details.phone}" shortly`);
    
}
contact({ename:"Smith", email:"nakhwa@gmail.com",phone:"8384856378"});



console.log(` `);
console.log(`==========Optional Parameter=============`);
function personalDetails(name:string, phoneNo:number, email?:string){
    console.log(`Name: ${name}`);
    console.log(`Phone No: ${phoneNo}`);
    if( email != undefined)
    {
         console.log(`Email: ${email}`);
    }
}
console.log(`personalDetails("Smith", 8463778397, "smith@gmail.com")`);
personalDetails("Smith",8463778397,"smith@gmail.com");
console.log(" ");

console.log(`personalDetails("Smith", 8463778397)`);
personalDetails("Smith",8463778397);









