for (let indeks = 0; indeks <= 2; indeks++) {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    basic.showNumber(3 - indeks)
}
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showString("GO!")
