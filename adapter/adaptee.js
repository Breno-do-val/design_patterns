"use strict";
exports.__esModule = true;
var adapter_1 = require("./adapter");
var iphone_model_1 = require("./models/iphone.model");
var iphone = new iphone_model_1.IPhone7();
var chargeAdapter = new adapter_1.LightningToMicroUSBAdapter(iphone);
chargeAdapter.useMicroUsbPort();
