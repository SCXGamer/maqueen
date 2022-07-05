let length = 0
let dice = 0
let run = 0
basic.forever(function () {
    length = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (length < 30) {
        dice = randint(1, 2)
    }
    if (dice == 1) {
        run = 1
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorStop(maqueen.Motors.M2)
        run = 0
    } else {
        run = 1
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorStop(maqueen.Motors.M1)
        run = 0
    }
})
basic.forever(function () {
    if (run == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
