import { Google } from './interfaces/google.interface';
import { Iphone } from './interfaces/iphone.interface';

export class LightningToMicroUSBAdapter implements Google {

    private iphoneDevice: Iphone;
    
    constructor( iPhone: Iphone) {
        this.iphoneDevice = iPhone;
    }

    useMicroUsbPort() {
        console.log('Want to use micro USB')
        this.iphoneDevice.useLightning();
    }
}