import { Car } from "./../car.abstract.model";
import { CarOptions } from "../carOptions.abstract.model";

export class EnhancedAutoPilot extends CarOptions {
    
    decoratedCar: Car;

    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }
    
    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', Enhanced Auto Pilot';
    }
    public cost(): number {
        return this.decoratedCar.cost() + 5000;
    }

}