let bol = true;
let kostka = 1;
let vyhodnoceni = false;
let hod

while(true){
    if(input.isGesture(Gesture.Shake) && bol == true){
        music.playTone(Note.C, music.beat(BeatFraction.Whole))
        hod = randint(1, 6);
        bol = false;
        basic.showNumber(kostka)
    }
    if(bol == false){
        if (input.logoIsPressed() && hod != kostka){
            
            basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
            music.playMelody("", 120)
            basic.pause(500)
            basic.showNumber(hod);
            basic.pause(1000)
            if(hod>kostka){basic.showNumber(hod-kostka)} //rozdíl
            if (hod < kostka) { basic.showNumber(kostka-hod) } //rozdíl
            bol = true
        
        }
        if (input.logoIsPressed() && hod == kostka) {

            basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
            music.playMelody("", 220)
            bol=true}
        if (input.buttonIsPressed(Button.B) && kostka > 1 && bol == false){
            kostka -=1
            basic.showNumber(kostka)

        }
        if (input.buttonIsPressed(Button.A) && kostka < 6 && bol == false) {
            kostka += 1
            basic.showNumber(kostka)
        }
        
    }
}