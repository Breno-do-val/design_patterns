import { Subject } from "../interfaces/subject";
import { Observer } from "../interfaces/Observer";

export class ConcreteSubject implements Subject {

    public state: number;

    private observers: Observer[] = [];

    attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);

        if (isExist) console.log('Subject: Observer has been attached already.');

        console.log('Subject: Attached an observer');
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        const observerIndex  = this.observers.indexOf(observer);

        if (observerIndex === -1) console.log('Subject: Nonexistent observer');

        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer');
    }

    notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    public someBusinessLogic(): void {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }

}