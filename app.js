const p1 = {
    display: document.querySelector('.player1'),
    score: 0,
    btn: document.querySelector('#btnPl1')
}

const p2 = {
    display: document.querySelector('.player2'),
    score: 0,
    btn: document.querySelector('#btnPl2')
}

const select = document.querySelector('#maxPoints');
let maxPoints = 3;
let isGameOver = false;
const btnRes = document.querySelector('#btnReset');

const scoreUpdate = (player, enemy) => {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === maxPoints && (player.score - 2) < enemy.score) {
            maxPoints += 1;
        }
        if (player.score === maxPoints) {
            isGameOver = true;
            player.display.classList.add('winner');
            enemy.display.classList.add('looser');
            player.btn.disabled = true;
            enemy.btn.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

const reset = () => {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('winner', 'looser');
        p.btn.disabled = false;
    }
}

p1.btn.addEventListener('click', () => {
    scoreUpdate(p1, p2);
})

p2.btn.addEventListener('click', () => {
    scoreUpdate(p2, p1);
})

select.addEventListener('change', () => {
    maxPoints = parseInt(select.value);
    reset();
})

btnRes.addEventListener('click', reset)