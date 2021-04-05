"use strict";
exports.__esModule = true;
exports.LightningToMicroUSBAdapter = void 0;
var LightningToMicroUSBAdapter = /** @class */ (function () {
    function LightningToMicroUSBAdapter(iPhone) {
        this.iphoneDevice = iPhone;
    }
    LightningToMicroUSBAdapter.prototype.useMicroUsbPort = function () {
        console.log('Want to use micro USB');
        this.iphoneDevice.useLightning();
    };
    return LightningToMicroUSBAdapter;
}());
exports.LightningToMicroUSBAdapter = LightningToMicroUSBAdapter;
