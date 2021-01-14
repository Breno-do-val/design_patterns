import { Observer } from "../interfaces/Observer";
import { Subject } from "../interfaces/subject";
import { ConcreteSubject } from "./ConcreteSubject";

export class ConcreteObserverB implements Observer {

    public update(subject: Subject): void {
        if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    }
}