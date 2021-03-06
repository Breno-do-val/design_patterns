import { Car } from "./car.abstract.model";
import { EnhancedAutoPilot } from "./decorators/enhancedAutoPilot.model";
import { RearFacingSeats } from './decorators/rearFacingSeats.model';

class ModelS extends Car {
    public description = "Model S";

    public cost(): number {
        return 73000;
    }
}

class ModelX extends Car {
    public description = "Model X";

    public cost(): number {
        return 77000;
    }
}

let myTesla = new ModelS();
myTesla = new RearFacingSeats(myTesla);
myTesla = new EnhancedAutoPilot(myTesla);
console.log(myTesla.getDescription());
console.log(myTesla.cost());

