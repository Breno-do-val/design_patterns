import { Car } from "../car.abstract.model";
import { CarOptions } from "../carOptions.abstract.model";

export class RearFacingSeats extends CarOptions {
    
    decoratedCar: Car;

    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }
    
    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', Rear facing seats';
    }
    public cost(): number {
        return this.decoratedCar.cost() + 4000;
    }

}