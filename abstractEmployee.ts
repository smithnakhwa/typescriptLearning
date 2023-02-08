abstract class Employee{
    constructor(public name:string,public payPerHour:number)
    {

    }
    public abstract calculateSalary():number;
}
class Contract extends Employee{
    
    constructor(public name:string,public payPerHour:number, public hours:number)
    {
        super(name,payPerHour);

    }
    public calculateSalary():number {
        return this.payPerHour*this.hours;
            }


}
class Fulltime extends Employee{
    
    constructor(public name:string,public payPerHour:number)
    {
        super(name,payPerHour);

    }
    public calculateSalary():number {
        return this.payPerHour*8;
            }


}
let contract=new Contract("Smith",500,4);
let fulltime=new Fulltime("rohit",500);
console.log(`The Salary of ${contract.name} is-->${contract.calculateSalary()}`);
console.log(`The Salary of ${fulltime.name} is-->${fulltime.calculateSalary()}`);

