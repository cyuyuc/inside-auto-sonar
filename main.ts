let available_distance = 0
radio.setGroup(11)
radio.setTransmitPower(7)
basic.forever(function () {
    available_distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(available_distance)
    if (available_distance > 20) {
        radio.sendValue("Available", 1)
    } else if (available_distance > 10) {
        radio.sendValue("Unavailable", 2)
    } else if (available_distance == 0) {
        radio.sendValue("Error", 3)
    } else {
    	
    }
    basic.pause(100)
})
