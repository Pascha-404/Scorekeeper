const playerOne = document.querySelector('.player1');
const playerTwo = document.querySelector('.player2');
const select = document.querySelector('#maxPoints');

let scoreOne = 0;
let scoreTwo = 0;
let maxPoints = 0;



const btn1 = document.querySelector('#btnPl1')
const btn2 = document.querySelector('#btnPl2')
const btnRes = document.querySelector('#btnReset')

btn1.addEventListener('click', () => {
    scoreOne++;
    playerOne.innerText = `${scoreOne}`;
    color();
})

btn2.addEventListener('click', () => {
    scoreTwo++;
    playerTwo.innerText = `${scoreTwo}`;
    color();
})

select.addEventListener('input', (e) =>{
    console.log(e);
    maxPoints = parseInt(select.value);
})

btnRes.addEventListener('click', () => {
    scoreOne = 0;
    scoreTwo = 0;
    playerOne.innerText = `${scoreOne}`;
    playerTwo.innerText = `${scoreTwo}`;
    playerOne.style.color = 'white';
    playerTwo.style.color = 'white';
    btn1.disabled = false;
    btn2.disabled = false;
})

const color = () => {
    if (scoreOne === maxPoints) {
        playerOne.style.color = 'green';
        playerTwo.style.color = 'red';
        btn1.disabled = true;
        btn2.disabled = true;
    } else if (scoreTwo === maxPoints) {
        playerOne.style.color = 'red';
        playerTwo.style.color = 'green';
        btn1.disabled = true;
        btn2.disabled = true;
    }
}