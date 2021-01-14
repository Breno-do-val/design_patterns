"use strict";
exports.__esModule = true;
exports.ConcreteObserverB = void 0;
var ConcreteSubject_1 = require("./ConcreteSubject");
var ConcreteObserverB = /** @class */ (function () {
    function ConcreteObserverB() {
    }
    ConcreteObserverB.prototype.update = function (subject) {
        if (subject instanceof ConcreteSubject_1.ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    };
    return ConcreteObserverB;
}());
exports.ConcreteObserverB = ConcreteObserverB;
