import { Observer } from "../interfaces/Observer";
import { Subject } from "../interfaces/subject";
import { ConcreteSubject } from "./ConcreteSubject";

export class ConcreteObserverA implements Observer {

    public update(subject: Subject): void {
        if (subject instanceof ConcreteSubject && subject.state <= 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}