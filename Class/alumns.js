var Alumn = /** @class */ (function () {
    function Alumn() {
        this.showMessage();
    }
    Alumn.prototype.showMessage = function () {
        console.log("Hello", this.name + " " + this.lastName);
    };
    Alumn.prototype.signature = function (nameOfParameter, lasNameOfParameter, weightParameter) {
        this.name = nameOfParameter;
        this.lastName = lasNameOfParameter;
        this.weight = weightParameter;
        this.showMessage();
    };
    return Alumn;
}());
var alumn1 = new Alumn();
alumn1.signature("Juan", "Garmendia", 200);
// alumn1.showMessage();
var alumn2 = new Alumn();
alumn1.signature("Alejandro", "Paz", 200);
// alumn1.showMessage();
