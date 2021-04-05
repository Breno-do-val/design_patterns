import { Iphone } from "../interfaces/iphone.interface";

export class IPhone7 implements Iphone {
    useLightning() {
        console.log('Using lightning port...');
    }
}