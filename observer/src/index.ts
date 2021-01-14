import { ConcreteSubject } from "./models/ConcreteSubject";
import { ConcreteObserverA } from "./models/ConcreteObserverA";
import { ConcreteObserverB } from "./models/ConcreteObserverB";

const subject = new ConcreteSubject();

const observerA = new ConcreteObserverA();
subject.attach(observerA);

const observerB = new ConcreteObserverB();
subject.attach(observerB);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.detach(observerB);

subject.someBusinessLogic();

