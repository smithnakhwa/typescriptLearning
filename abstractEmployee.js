var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, payPerHour) {
        this.name = name;
        this.payPerHour = payPerHour;
    }
    return Employee;
}());
var Contract = /** @class */ (function (_super) {
    __extends(Contract, _super);
    function Contract(name, payPerHour, hours) {
        var _this = _super.call(this, name, payPerHour) || this;
        _this.name = name;
        _this.payPerHour = payPerHour;
        _this.hours = hours;
        return _this;
    }
    Contract.prototype.calculateSalary = function () {
        return this.payPerHour * this.hours;
    };
    return Contract;
}(Employee));
var Fulltime = /** @class */ (function (_super) {
    __extends(Fulltime, _super);
    function Fulltime(name, payPerHour) {
        var _this = _super.call(this, name, payPerHour) || this;
        _this.name = name;
        _this.payPerHour = payPerHour;
        return _this;
    }
    Fulltime.prototype.calculateSalary = function () {
        return this.payPerHour * 8;
    };
    return Fulltime;
}(Employee));
var contract = new Contract("Smith", 500, 4);
var fulltime = new Fulltime("rohit", 500);
console.log("The Salary of ".concat(contract.name, " is-->").concat(contract.calculateSalary()));
console.log("The Salary of ".concat(fulltime.name, " is-->").concat(fulltime.calculateSalary()));
