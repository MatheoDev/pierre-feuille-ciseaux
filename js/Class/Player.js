/**
 * 
 * @author MatheoDev
 */
class Player {

    constructor(name) {
        this.name = name;
    }

    paper() {
        return 'paper';
    }

    scissors() {
        return 'scissors';
    }

    stone() {
        return 'stone';
    }

    play() {
        let number = Math.floor(Math.random() * Math.floor(3));
        if (number == 0) {
            return this.paper();
        } else if (number == 1) {
            return this.scissors();
        } else if (number == 2) {
            return this.stone();
        }
    }

}

let player1 = new Player('Matheo');
let player2 = new Player('IA');
let score1 = 0;
let score2 = 0;

do {
    let hand1 = player1.play();
    let hand2 = player2.play();

    if (hand1 == hand2) {
        console.log('null');
    } else if (hand1 == 'paper' && hand2 == 'stone') {
        score1++;
        console.log('Player1 win this round');
    } else if (hand1 == 'paper' && hand2 == 'scissors') {
        score2++;
        console.log('Player2 win this round');
    } else if (hand1 == 'scissors' && hand2 == 'stone') {
        score2++;
        console.log('Player2 win this round');
    } else if (hand1 == 'scissors' && hand2 == 'paper') {
        score1++;
        console.log('Player1 win this round');
    } else if (hand1 == 'stone' && hand2 == 'paper') {
        score2++;
        console.log('Player2 win this round');
    } else if (hand1 == 'stone' && hand2 == 'scissors') {
        score1++;
        console.log('Player1 win this round');
    }

    if (score1 == 3) {
        console.log('Palyer 1 win this game !');
    } else if (score2 == 3) {
        console.log('Player 2 win this game !');
    }
} while (score1 != 3 && score2 != 3);
