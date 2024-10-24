for (let indeks = 0; indeks <= 2; indeks++) {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
    basic.showNumber(3 - indeks)
}
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
basic.showString("GO!")
basic.showIcon(IconNames.Happy)
