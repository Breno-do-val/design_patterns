"use strict";
exports.__esModule = true;
exports.ConcreteObserverA = void 0;
var ConcreteSubject_1 = require("./ConcreteSubject");
var ConcreteObserverA = /** @class */ (function () {
    function ConcreteObserverA() {
    }
    ConcreteObserverA.prototype.update = function (subject) {
        if (subject instanceof ConcreteSubject_1.ConcreteSubject && subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    };
    return ConcreteObserverA;
}());
exports.ConcreteObserverA = ConcreteObserverA;
