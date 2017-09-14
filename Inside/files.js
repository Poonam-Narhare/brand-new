"use strict";
exports.__esModule = true;
var Files = (function () {
    // private size: number;
    function Files(size, data) {
        if (data === void 0) { data = '100'; }
        this.size = size;
        this.data = data;
    }
    Files.prototype.assignSize = function (size) {
        this.size = size;
    };
    Files.prototype.fileSize = function () {
        return this.size;
    };
    Object.defineProperty(Files.prototype, "dataVal", {
        get: function () {
            return this.data;
        },
        set: function (dt) {
            this.data = dt;
        },
        enumerable: true,
        configurable: true
    });
    return Files;
}());
exports.Files = Files;
var fl = new Files(100);
console.log(fl.dataVal);
fl.dataVal = '10';
exports.PI = 3.17;
