console.log("=========Union Type========");
var rollNo;
rollNo = 10;
console.log("rollNo:== ".concat(rollNo));
rollNo = "ten";
console.log("rollNo:== ".concat(rollNo));
console.log(" ");
;
console.log("==========class parameter propertie===========");
var Employee = /** @class */ (function () {
    function Employee(emp_id, emp_name) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
    }
    return Employee;
}());
var emp1 = new Employee(11, "Smith");
console.log(emp1);
console.log(" ");
console.log("============Intersection type==============");
function contact(details) {
    console.log("Dear \"".concat(details.ename, "\" I hope you have received our email at \"").concat(details.email, "\", We will call you on \"").concat(details.phone, "\" shortly"));
}
contact({ ename: "Smith", email: "nakhwa@gmail.com", phone: "8384856378" });
console.log(" ");
console.log("==========Optional Parameter=============");
function personalDetails(name, phoneNo, email) {
    console.log("Name: ".concat(name));
    console.log("Phone No: ".concat(phoneNo));
    if (email != undefined) {
        console.log("Email: ".concat(email));
    }
}
console.log("personalDetails(\"Smith\", 8463778397, \"smith@gmail.com\")");
personalDetails("Smith", 8463778397, "smith@gmail.com");
console.log(" ");
console.log("personalDetails(\"Smith\", 8463778397)");
personalDetails("Smith", 8463778397);
