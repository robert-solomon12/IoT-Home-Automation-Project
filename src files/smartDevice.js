var util = require("util");

var spawn = require("child_process").spawn;

//var process = spawn('python',["pirTest.py"], {detached: true});

var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

var RELAY = new Gpio(4, 'out'); //use GPIO pin 7 (ON BOARD) and specify that it is this pin

var SENSORSTATE = new Gpio(21, 'out'); //sets the state of the PIR Sensor to 0 ... only necessary if the PIR DOESNT SHUT DOWN ON COMMAND

var Blynk = require("blynk-library");

var AUTH = 'INSERT-YOUR-TOKEN-HERE';

var blynk = new Blynk.Blynk(AUTH);

var v0 = new blynk.VirtualPin(0);

var v1 = new blynk.VirtualPin(1);


 v0.on('write', function(param){
if(param[0] ==='1')
    RELAY.writeSync(1); //1 (turn LAMP ON)

else RELAY.writeSync(0); //0 (turn LAMP OFF)
console.log('V0:',param[0]);
})

var process = spawn('python',["pirTest.py"], {detached: true});

 v1.on('write', function(param){
if(param[0] ==='1')
    spawn('python',["pirTest.py"]);
    RELAY.writeSync(0);

//var process = spawn('python',["pirTest.py"], {detached: true});

//else(param[0] ==='0')
if(param[0] ==='0')
      // process.kill(-'python',["pirTest.py"], {detached: true});
       process.kill(-process.pid);
console.log('V1:',param[0]);
})
