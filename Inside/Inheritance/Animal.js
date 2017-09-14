"use strict";
exports.__esModule = true;
var Animal = (function () {
    function Animal() {
        this.legs = 4;
    }
    Animal.prototype.walk = function () {
        console.log("animal is walking");
    };
    return Animal;
}());
exports.Animal = Animal;
