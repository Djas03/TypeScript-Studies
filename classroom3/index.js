var Person1 = /** @class */ (function () {
    function Person1(name, old) {
        this.name = name;
        this.old = old;
    }
    Person1.prototype.getName = function () {
        return this.name;
    };
    Person1.prototype.getOld = function () {
        return this.old;
    };
    Person1.prototype.setName = function (name) {
        this.name = name;
    };
    Person1.prototype.setOld = function (old) {
        this.old = old;
    };
    return Person1;
}());
var person1 = new Person1("Djas", 20);
var person2 = new Person1("Jonas", 22);
person2.setName("Silva");
console.log(person1.getName());
console.log(person2.getName());
