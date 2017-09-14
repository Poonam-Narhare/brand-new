"use strict";
exports.__esModule = true;
var Mobile = (function () {
    function Mobile() {
        this.DC_SUPPLY = 5;
    }
    Mobile.prototype.powerSupply = function () {
        console.log('yes we are done');
        return 230;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
var ch = new Mobile();
console.log('yes we are done');
var ch1 = {
    DC_SUPPLY: 5,
    powerSupply: function () { return 230; }
};
ch1 = ch;
