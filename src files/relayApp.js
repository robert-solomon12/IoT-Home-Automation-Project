var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

var LAMP = new Gpio(4, 'out'); //use GPIO pin 2, and specify that it is output

var Blynk = require("blynk-library");

var AUTH = '388dee48785e45498fcde4458c72c39a';

var blynk = new Blynk.Blynk(AUTH);

var v0 = new blynk.VirtualPin(0);

 v0.on('write', function(param){
if(param[0] ==='1')
    LAMP.writeSync(1); //1 (turn LAMP ON)
else LAMP.writeSync(0);
console.log('V0:',param[0]);
})

//    LAMP.writeSync(0); //set pin state to 0 (turn LED off)
