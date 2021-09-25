let n = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(n - 1)
})
input.onGesture(Gesture.Shake, function () {
    n = randint(1, 100)
    basic.showNumber(n)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(n + 1)
})
