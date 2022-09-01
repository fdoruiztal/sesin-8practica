input.onButtonPressed(Button.A, function () {
    sumar = A + B
    basic.showNumber(sumar)
    texto = "SUMASTE"
})
input.onButtonPressed(Button.AB, function () {
    multiplicar = A * B
    basic.showNumber(multiplicar)
    texto = "MULTIPLICASTE"
})
input.onButtonPressed(Button.B, function () {
    restar = A - B
    basic.showNumber(restar)
    texto = "RESTASTE"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(A)
    basic.showNumber(B)
    basic.showString(texto)
})
let restar = 0
let multiplicar = 0
let sumar = 0
let texto = ""
let B = 0
let A = 0
A = randint(1, 5)
B = randint(1, 5)
texto = "NADA"
