bluetooth.onBluetoothConnected(function () {
    if (Temperatura < 9 || Temperatura > 30) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            . . . . #
            `)
    } else if (Humedad < 80) {
        basic.showLeds(`
            # # . # .
            # . . . .
            . # # # .
            # . . . #
            . . . . #
            `)
    } else if (Luminosidad < 20) {
        basic.showLeds(`
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            . . . . #
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . #
            `)
    }
})
bluetooth.onBluetoothDisconnected(function () {
    if (input.temperature() < 9 || input.temperature() > 30) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            . . . . #
            `)
    } else if (Humedad < 80) {
        basic.showLeds(`
            # # . # .
            # . . . .
            . # # # .
            # . . . #
            . . . . #
            `)
    } else if (Luminosidad < 20) {
        basic.showLeds(`
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            . . . . #
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . #
            `)
    }
})
let Luminosidad = 0
let Humedad = 0
let Temperatura = 0
basic.showIcon(IconNames.Heart)
bluetooth.startTemperatureService()
bluetooth.startIOPinService()
basic.forever(function () {
    Temperatura = input.temperature()
    Humedad = pins.analogReadPin(AnalogPin.P0)
    Luminosidad = input.lightLevel()
    basic.pause(5000)
})
