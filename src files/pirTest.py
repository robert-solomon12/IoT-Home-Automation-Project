
import RPi.GPIO as GPIO
import time
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.setup(21,GPIO.IN)  #Read input from PIR motion sensor
GPIO.setup(24,GPIO.OUT) #RED LED
GPIO.setup(25,GPIO.OUT) #GREEN LED
GPIO.setup(4,GPIO.OUT)  #RELAY
try:
        while True:
            input=GPIO.input(21)
            if input==0:                 #When output from motion sensor is LOW
                    print("No intruders",input)
                    GPIO.output(24,1)  #RED LED LIVE
                    GPIO.output(25,0)  #GREEN LED IS OFF
                    GPIO.output(4,0)   #RELAY IS OFF
                    time.sleep(0.1)
            elif input==1:               #When output from motion sensor is HIGH
                    print("Intruder detected",input)
                    GPIO.output(24,0)  #RED LED IS OFF
                    GPIO.output(25,1)  #GREEN LED IS LIVE
                    GPIO.output(4,1)   #RELAY IS LIVE
                    time.sleep(0.1)
finally:
        GPIO.cleanup()