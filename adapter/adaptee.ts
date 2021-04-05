import { LightningToMicroUSBAdapter } from "./adapter";
import { IPhone7 } from "./models/iphone.model";

let iphone = new IPhone7();
let chargeAdapter = new LightningToMicroUSBAdapter(iphone);

chargeAdapter.useMicroUsbPort();
