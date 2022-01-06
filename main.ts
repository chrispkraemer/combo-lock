let btnPressed = 0
let list = [
    0,
    0,
    1,
    1,
    2
]
let progress = 0
fram.init()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        progress = progress + 1
        btnPressed = 0
    } else if (input.buttonIsPressed(Button.B)) {
        music.playTone(392, music.beat(BeatFraction.Sixteenth))
        progress = progress + 1
        btnPressed = 1
    } else if (input.logoIsPressed()) {
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
        progress = progress + 1
        btnPressed = 2
    }
    if (list[progress] == btnPressed) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
        music.playTone(165, music.beat(BeatFraction.Double))
        basic.pause(100)
        btnPressed = 0
        progress = 0
    }
    basic.pause(100)
    basic.showNumber(progress)
    if (progress >= list.length - 1) {
        basic.showIcon(IconNames.Heart)
    }
    basic.pause(50)
})
