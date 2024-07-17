

t1=gsap.timeline();

t1.to('.loader',{
    height:'0%',
    duration:'2',
    delay:'4',
})

gsap.to('.loader h4',{
    opacity:0,
    duration:'3.8'
})

t1.from('.nav',{
    y:-1000,
    duration:'0.4',
    ease:'Expo.inOut(1)',
    delay:'-1'
})

t1.from('.headerDesign1',{
    x:-1000,
    duration:'0.8',
    ease:'Expo.inOut(1)'
})

t1.from('.headerDesign2',{
    x:1000,
    duration:'0.8',
    ease:'Expo.inOut(1)'
})

t1.to('.page1',{
    opacity:'100%',
    duration:'0.8',
})

gsap.to('#scoll',{
    opacity:'100%',
    duration:'2',
    scrollTrigger:{
        trigger:'#scoll',
        scroller:'body',
        marker:'true'
    }
})

gsap.from('#page2',{
    x:'1000',
    duration:'1.2',
    scrollTrigger:{
        trigger:'#page2',
        scroller:'body',
        marker:'true'
    }
})

gsap.from('.footer',{
    y:'1000',
    duration:'1.2',
    scrollTrigger:{
        trigger:'#page2',
        scroller:'body',
        marker:'true'
    }
})

var userInput = -1;
var computerInput = -1; // Declare computerInput globally

var clickRock = document.querySelector('#clickRock');
var clickPaper = document.querySelector('#clickPaper');
var clickScissor = document.querySelector('#clickScissor');
var submit = document.querySelector('#submit');
var result = document.querySelector('#result');
var yourChoice = document.querySelector('#yourChoice');
var computerChoice = document.querySelector('#computerChoice');

clickRock.addEventListener('click', () => {
    userInput = 1;
    yourChoice.textContent = "Rock";
});

clickPaper.addEventListener('click', () => {
    userInput = 2;
    yourChoice.textContent = "Paper";
});

clickScissor.addEventListener('click', () => {
    userInput = 3;
    yourChoice.textContent = "Scissor";
});

function selectcomputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

submit.addEventListener('click', () => {
    computerInput = selectcomputerChoice();
    playGame();
});

function playGame() {
    if (userInput === -1) {
        result.textContent = "Please select your choice first!";
        return;
    }

    switch (computerInput) {
        case 1:
            computerChoice.textContent = "Rock";
            break;
        case 2:
            computerChoice.textContent = "Paper";
            break;
        case 3:
            computerChoice.textContent = "Scissor";
            break;
    }

    if (userInput === computerInput) {
        result.textContent = "It's a tie!";
    } else if (
        (userInput === 1 && computerInput === 3) ||
        (userInput === 2 && computerInput === 1) ||
        (userInput === 3 && computerInput === 2)
    ) {
        result.textContent = "You win!";
    } else {
        result.textContent = "Computer wins!";
    }

    userInput = -1; // Reset userInput after each game
}
