const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');
const greybg = 'rgb(192, 192, 192)';
const rock_c = document.getElementById('r-comp');
const paper_c = document.getElementById('p-comp');
const scissors_c = document.getElementById('s-comp');

// Class starts here
class rps {
    constructor() {
        this.editwriting = document.getElementsByClassName('editwriting')[0]
        this.winmessage = 'PLAYER 1 WINS'
        this.losemessage = 'COMP WINS'
        this.drawmessage = 'DRAW'
        this.classmessage = ' new-class'
    }

    check(humanplayer, compplayer) {
        switch (humanplayer + compplayer) {
            case "pr":
            case "rs":
            case "sp":
                this.win();
                break;
            case "rp":
            case "sr":
            case "ps":
                this.lose();
                break;
            case "rr":
            case "pp":
            case "ss":
                this.draw();
                break;
        }
    }

    win() {
        console.log("human wins!")
        this.editwriting.className += this.classmessage;
        this.editwriting.innerHTML = this.winmessage;
    }
    lose() {
        console.log("comp wins!")
        this.editwriting.className += this.classmessage;
        this.editwriting.innerHTML = this.losemessage;
    }
    draw() {
        console.log("it's a draw!")
        this.editwriting.className += this.classmessage;
        this.editwriting.innerHTML = this.drawmessage;
    }

}

class choices extends rps {
    constructor(player1, player2) {
        super()
        this.player1 = player1
        this.player2 = player2
        this.check(this.player1, this.player2)
    }
}
// Class ends here

//Function buat ganti warna
function changeBgColor(target, newcolor) {
    target.style.backgroundColor = newcolor
}

// Computer Choice
function getChoiceComp(humanchoice) {
    const dapetdarihuman = humanchoice
    const compchoice = ['r', 'p', 's']
    const random = Math.floor((Math.random() * 3))
    const choiceComp = compchoice[random]
    switch (choiceComp) {
        case 'r':
            changeBgColor(rock_c, greybg)
            break;
        case 'p':
            changeBgColor(paper_c, greybg)
            break;
        case 's':
            changeBgColor(scissors_c, greybg)
            break;
    }
    new choices(dapetdarihuman, choiceComp)

}

// Human Choice
rock.addEventListener('click', function(e) {
    e.preventDefault()
    elementid = 'r'
    changeBgColor(rock, greybg)
    getChoiceComp(elementid)
})
paper.addEventListener('click', function(e) {
    e.preventDefault()
    elementid = 'p'
    changeBgColor(paper, greybg)
    getChoiceComp(elementid)

})
scissors.addEventListener('click', function(e) {
    e.preventDefault()
    elementid = 's'
    changeBgColor(scissors, greybg)
    getChoiceComp(elementid)
})