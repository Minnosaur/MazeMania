

let levelCounter = 0; 
let clickCounter = 0;
let clicked = false;
let started = false;

const startPage = document.querySelector(".startPage");
const header = document.querySelector(".header");

const nextButtonTwo = document.querySelector(".next-2");
const nextButtonThree = document.querySelector(".next-3");
const startButton = document.querySelector(".real");
const fakeButton = document.querySelector(".start")

//svg mazes
const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");
const levelThree = document.querySelector(".level-three");
const uiLevel = document.querySelector(".ui-level");
const description = document.querySelector(".description");

const game = document.querySelector(".game");
const scream = document.querySelector(".scream");
const jeff = document.querySelector(".jeff");
const arrow = document.querySelector(".arrow");


startButton.addEventListener("click", e => {
  clicked = true;
  start();
})

window.addEventListener("click", e => {
  clickCounter++;
  if(started == false){
      if(clickCounter == 1 && clicked == false){
        alert("Ha, you thought it was that easy? \nTry *focusing* on the screen. Do you see anything?")
      }else if(clickCounter == 2){
        //add grey arrow pointing to button
        alert("Are you just randomly clicking now? \nLook again, I've given you a pointer...");
        header.style.margin = "0px";
        arrow.style.display = "block";
      }else if(clickCounter == 3){
        alert("No way you haven't found it by now. You know what, just go. Leave, I can't deal with you humans.");
        start();
      }
  }

})

function start(){
  clickCounter = 0;
  started = true;
    startPage.style.display = "none";
  //http://nuno-cardoso.pt/articulate/change_cursor/ - in js file
  game.style.cursor = "url('rect1.jpg'), auto";
  description.style.display = "flex";
  levelOne.style.display = "block";

  uiLevel.innerHTML = "Level 1";
  levelOne.style.pointerEvents = "all";
  startButton.style.display = "none";
}

document.addEventListener("mousemove", () => {
  let mousex = event.clientX; // Gets Mouse X
  let mousey = event.clientY; // Gets Mouse Y
  console.log([mousex, mousey]); // Prints data
});


window.addEventListener("mousemove", (e) => {
  console.log(e.target.classList.value);
  let check = e.target.classList.value;
  collisionCheck(check);
});

const collisionCheck = (value) => {
  if (value === "maze-border"){
     levelCounter = 0;
     started = false;
     startPage.style.display = "flex";
     description.style.display = "none";
     levelOne.style.display = "none";
     levelTwo.style.display = "none";
     levelThree.style.display = "none";
    startButton.style.display = "block";
  } 

  if (value === "finish") {
    levelCounter++;
    console.log("FIn: " + levelCounter);
    if(levelCounter == 1){
      nextButtonTwo.style.opacity = 1;
      nextButtonTwo.style.pointerEvents = "all";
      levelOne.style.pointerEvents = "none";    
    }
    else if(levelCounter == 2){
      nextButtonThree.style.opacity = 1;
      nextButtonThree.style.pointerEvents = "all";
      levelTwo.style.pointerEvents = "none";

    }
    
  }

  if (value === "end-game") {
     levelThree.style.display = "none";
     description.style.display = "none";
     jeff.style.display = "flex";
     scream.play();
    
  }
};

nextButtonTwo.addEventListener("click", () => {
    levelOne.style.display = "none";
    levelTwo.style.display = "block";
    nextButtonTwo.style.opacity = 0;
    nextButtonTwo.style.pointerEvents = "none";
  uiLevel.innerHTML = "Level 2";
});

nextButtonThree.addEventListener("click" , () => {
    levelTwo.style.display = "none";
    levelThree.style.display = "block";
    nextButtonThree.style.opacity = 0;
    nextButtonThree.style.pointerEvents = "none";
    uiLevel.innerHTML = "Level 3";
})

                                 

