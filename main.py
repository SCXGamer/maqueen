length = 0
dice = 0
run = 0

def on_forever():
    global length, dice, run
    length = maqueen.ultrasonic(PingUnit.CENTIMETERS)
    if length < 30:
        dice = randint(1, 2)
    if dice == 1:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        run = 1
    else:
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        run = 1
basic.forever(on_forever)

def on_forever2():
    if run == 1:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 255)
basic.forever(on_forever2)
