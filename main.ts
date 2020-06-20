let distance = 0
let delay = 1500
let list = [1, 0, 0, 0]
pins.digitalWritePin(DigitalPin.P0, 0)
let X = 0
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
basic.forever(function () {
    while (X <= 4) {
        for (let index = 0; index < 2; index++) {
            pins.digitalWritePin(DigitalPin.P0, list[X])
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
        }
        for (let index = 0; index < 2; index++) {
            pins.digitalWritePin(DigitalPin.P0, list[Math.abs(X - 1)])
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
        }
        for (let index = 0; index < 2; index++) {
            pins.digitalWritePin(DigitalPin.P0, list[Math.abs(X - 2)])
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
        }
        for (let index = 0; index < 2; index++) {
            pins.digitalWritePin(DigitalPin.P0, list[Math.abs(X - 3)])
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
        }
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        X += 1
        distance = sonar.ping(
        DigitalPin.P13,
        DigitalPin.P14,
        PingUnit.Centimeters
        )
        delay = distance / 0.05
        if (delay < 1500) {
            basic.pause(delay)
        } else {
            basic.pause(1000)
        }
    }
    X = 0
})
