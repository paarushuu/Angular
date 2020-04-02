"use strict";
/**
 * Create a super class called Car. The Car class has the following fields and methods.
a. Number speed;
b. number regularPrice;
c. String color;
d. Number getSalePrice();
Create a subclass of Car class and name it as Truck. The Truck class has the following fields and methods.
e. Number weight;
f. Number getSalePrice(); // If weight > 2000, 10% discount. Otherwise, 20% discount.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(speed, regularPrice, color) {
        this.speed = speed;
        this.regularPrice = regularPrice;
        this.color = color;
    }
    Car.prototype.getSalesPrice = function () {
        var salesPrice = 30; //in %
        return this.regularPrice + (this.regularPrice * (salesPrice / 100));
    };
    return Car;
}());
exports.Car = Car;
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(weight, speed, regularPrice, color) {
        var _this = _super.call(this, speed, regularPrice, color) || this;
        _this.weight = weight;
        return _this;
    }
    Truck.prototype.getSalesPrice = function () {
        if (this.weight > 2000) {
            return this.regularPrice - (this.regularPrice * (10 / 100));
        }
        else {
            return this.regularPrice - (this.regularPrice * (20 / 100));
        }
    };
    return Truck;
}(Car));
exports.Truck = Truck;
var truck = new Truck(1001, 120, 2500000, "blue");
var discountedPrice = truck.getSalesPrice();
console.log("Price", discountedPrice);
var truck1 = new Truck(3000, 150, 4000000, "yellow");
var discountedPrice1 = truck1.getSalesPrice();
console.log("Price", discountedPrice1);
