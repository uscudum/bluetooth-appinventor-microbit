bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
basic.showIcon(IconNames.Heart)
bluetooth.startTemperatureService()
bluetooth.startIOPinService()
basic.forever(function () {
	
})
