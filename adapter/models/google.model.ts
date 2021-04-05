import { Google } from "../interfaces/google.interface";

export class GooglePixel implements Google {
    useMicroUsbPort() {
        console.log('Using micro USB ...');
    }
}