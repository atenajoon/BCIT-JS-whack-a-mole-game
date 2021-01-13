// Whack a Mole Game

// This code is based on code found at
// https://javascript30.com

const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard = document.querySelector('.score');
let lastHole;
let timeUp = false;
let score = 0;

function randTime(min, max){
    return Math.round(min + Math.random()*(max - min));
}

function randHole(holse){
    const idx = Math.floor(Math.random()*holes.length);
    const hole = holes[idx];
    
    if(hole !== lastHole){
        lastHole = hole;
        return hole;   
    }
    else{
        return randHole(holes);
    }
}

function peep(min){
    const time = randTime(min, 1000);
    const hole = randHole(holes);
    hole.classList.add('up');
    setTimeout(()=>{
        hole.classList.remove('up');
        if(!timeUp) peep();
    }, time);
}

function startGame(e){

    // let val = document.getElementById("form");
    // console.log(val.elements["form"].value)

    // if(document.getElementById("begginer").checked){
    //     let val = document.getElementById("begginer").value;
    //     console.log(val);
    // } else if(document.getElementById("intermediate").checked){
    //     let val = document.getElementById("intermediate").value;
    //     console.log(val);
    // } else if(document.getElementById("expert").checked){
    //     let val = document.getElementById("expert").value;
    //     console.log(val);
    // } else {
    //     console.log("choose one!");
    // }


    // console.log(val);
    e.preventDefault();
    console.log("got")


    // score = 0;
    // scoreBoard.textContent = 0;
    // timeUp = false;
    // if(val === "begginer"){
    //     peep(400);
    // }
    // else if(val === "intermediate"){
    //     peep(300);
    // }
    // else if(val === "expert"){
    //     peep(200);
    // }
    // else {
    //     alert('you should choose the level of the game!');
    // }
    // setTimeout(()=> timeUp = true, 10000)
}



function whacked(m){
    if(!m.isTrusted) return; // prevent fake clicks!
    score++;
    scoreBoard.textContent = score;
}
moles.forEach(mole => mole.addEventListener('click', whacked));

// End...(Atena)