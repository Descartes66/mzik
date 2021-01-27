forever(function () {
    for (let index = 0; index < 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Eighth))
        music.playTone(523, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Eighth))
        music.playTone(784, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Eighth))
        music.playTone(659, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Eighth))
        music.playTone(784, music.beat(BeatFraction.Quarter))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(349, music.beat(BeatFraction.Eighth))
        music.playTone(698, music.beat(BeatFraction.Quarter))
        music.playTone(523, music.beat(BeatFraction.Eighth))
        music.playTone(1046, music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Eighth))
        music.playTone(880, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Eighth))
        music.playTone(1046, music.beat(BeatFraction.Quarter))
    }
})
