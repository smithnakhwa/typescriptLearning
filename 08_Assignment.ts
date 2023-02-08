abstract class Car {
    Wheel(): string {
    return '4 wheeler';
    }
    CheckAC(): string {
    return 'Ac is available';
    }
    CallFacility() : string {
    return "Call facility supported"
    }
    abstract Price(): number;
    abstract getTotalSeats(): number;
    abstract Color(): string;
    }
    class Toyota extends Car{
    gps(): string {
       return "Not Supported";
    }
    
    Price(): number {
    return 1000000;
    }
    getTotalSeats(): number {
    return 5;
    }
    Color(): string {
    return 'white';
    }
    }
    class Hundai extends Car{
    gps(): string {
            return "Supported";
    }  

    Price(): number {
    return 900000;
    }
    getTotalSeats(): number {
    return 7;
    }
    Color(): string {
    return 'gray';
    }
    }
    interface IGps{
         gps():string;

  }
const hundai=new Hundai();
const toyota=new Toyota();
console.log(`The Gps Features is "${toyota.gps()}" in Toyota`);
console.log(`The Gps Features is "${hundai.gps()}" in Hundai`);




    