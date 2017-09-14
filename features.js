"use strict";
exports.__esModule = true;
var files_1 = require("./inside/files");
var Computer = (function () {
    function Computer() {
        console.log(files_1.PI);
    }
    Computer.prototype.reSizeIt = function (sz) {
    };
    return Computer;
}());
var com = new Computer();
com.reSizeIt();
