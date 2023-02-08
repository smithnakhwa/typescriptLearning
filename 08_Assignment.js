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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.Wheel = function () {
        return '4 wheeler';
    };
    Car.prototype.CheckAC = function () {
        return 'Ac is available';
    };
    Car.prototype.CallFacility = function () {
        return "Call facility supported";
    };
    return Car;
}());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toyota.prototype.gps = function () {
        return "Not Supported";
    };
    Toyota.prototype.Price = function () {
        return 1000000;
    };
    Toyota.prototype.getTotalSeats = function () {
        return 5;
    };
    Toyota.prototype.Color = function () {
        return 'white';
    };
    return Toyota;
}(Car));
var Hundai = /** @class */ (function (_super) {
    __extends(Hundai, _super);
    function Hundai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hundai.prototype.gps = function () {
        return "Supported";
    };
    Hundai.prototype.Price = function () {
        return 900000;
    };
    Hundai.prototype.getTotalSeats = function () {
        return 7;
    };
    Hundai.prototype.Color = function () {
        return 'gray';
    };
    return Hundai;
}(Car));
var hundai = {
    gps: function () {
        return " Yes";
    },
    Wheel: function () {
        return "4";
    },
    CheckAC: function () {
        return "true";
    },
    CallFacility: function () {
        return "yes";
    },
    Price: function () {
        return 1003786475;
    },
    getTotalSeats: function () {
        return 4;
    },
    Color: function () {
        return "Red";
    }
};
var toyota = new Toyota();
console.log("The Gps Features is \"".concat(toyota.gps(), "\" in Toyota"));
console.log("The Gps Features is \"".concat(hundai.gps(), "\" in Hundai"));
