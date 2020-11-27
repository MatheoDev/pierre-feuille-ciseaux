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

    rock() {
        return 'rock';
    }

    play() {
        let number = Math.floor(Math.random() * Math.floor(3));
        if (number == 0) {
            return this.paper();
        } else if (number == 1) {
            return this.scissors();
        } else if (number == 2) {
            return this.rock();
        }
    }

}

let player1 = new Player('Matheo');
let player2 = new Player('IA');
let score1 = 0;
let score2 = 0;

const table = document.getElementById('rounds');
const createLine = (score1, hand1, score2, hand2, win) => {
    let tr = document.createElement('tr');
    tr.classList.add('table-light');
    let td0 = document.createElement('td');
    td0.classList.add('text-right');
    td0.textContent = hand1;
    let td1 = document.createElement('td');
    if (win == 0) {
        td1.innerHTML = '<i class="fas fa-equals"></i> ' + score1 + ' | ' + score2 + ' <i class="text-secondary fas fa-equals"></i>';
    } else if (win == 1) {
        td1.innerHTML = '<i class="text-success fas fa-plus"></i> ' + score1 + ' | ' + score2 + ' <i class="text-danger fas fa-minus"></i>';
    } else if (win == 2) {
        td1.innerHTML ='<i class="text-danger fas fa-minus"></i> ' + score1 + ' | ' + score2 + ' <i class="text-success fas fa-plus"></i>';
    }
    td1.classList.add('text-center');
    let td2 = document.createElement('td');
    td2.textContent = hand2;
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
}

do {
    let hand1 = player1.play();
    let hand2 = player2.play();

    if (hand1 == hand2) {
        createLine(score1, hand1, score2, hand2, 0);
    } else if (hand1 == 'paper' && hand2 == 'rock') {
        score1++;
        createLine(score1, hand1, score2, hand2, 1);
    } else if (hand1 == 'paper' && hand2 == 'scissors') {
        score2++;
        createLine(score1, hand1, score2, hand2, 2);
    } else if (hand1 == 'scissors' && hand2 == 'rock') {
        score2++;
        createLine(score1, hand1, score2, hand2, 2);
    } else if (hand1 == 'scissors' && hand2 == 'paper') {
        score1++;
        createLine(score1, hand1, score2, hand2, 1);
    } else if (hand1 == 'rock' && hand2 == 'paper') {
        score2++;
        createLine(score1, hand1, score2, hand2, 2);
    } else if (hand1 == 'rock' && hand2 == 'scissors') {
        score1++;
        createLine(score1, hand1, score2, hand2, 1);
    }

    if (score1 == 3) {
        document.getElementById('winner').textContent = 'The player 1 win the game !';
    } else if (score2 == 3) {
        document.getElementById('winner').textContent = 'The player 1 win the game !';
    }
} while (score1 != 3 && score2 != 3);
