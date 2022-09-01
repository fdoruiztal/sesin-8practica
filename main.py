def on_button_pressed_a():
    global sumar
    sumar = A + B
    basic.show_number(sumar)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_logo_pressed():
    basic.show_number(A)
    basic.show_number(B)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

sumar = 0
B = 0
A = 0
A = randint(1, 5)
B = randint(1, 5)