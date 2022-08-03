//FOR STARTING POSITIONS OF PLAYER, MAKE IT RELATIVE TO SCREEN SIZE, NOT SPECIFIC (x,y)


let levelCounter = 0; 
let stickToMouse = false;

const startPage = document.querySelector(".startPage");

const nextButtonTwo = document.querySelector(".next-2");
const nextButtonThree = document.querySelector(".next-3");
const startButton = document.querySelector(".start");

//svg mazes
const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");
const levelThree = document.querySelector(".level-three");
const uiLevel = document.querySelector(".ui-level");
const description = document.querySelector(".description");
const player = document.querySelector(".player");

const game = document.querySelector(".game");
const scream = document.querySelector(".scream");
const jeff = document.querySelector(".jeff");


player.style.position = "absolute"; //absolute = relative to nothing (not affected by other objs)
player.style.top = -10;//y
player.style.left = window.innerWidth/2;//x


startButton.addEventListener("click", e => {
  startPage.style.display = "none";
  description.style.display = "flex";
  levelOne.style.display = "block";
  player.style.top = 752;//y
  player.style.left = window.innerWidth/2;//x
  uiLevel.innerHTML = "Level 1";
  levelOne.style.pointerEvents = "all";
})

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
     startPage.style.display = "flex";
     description.style.display = "none";
     levelOne.style.display = "none";
     levelTwo.style.display = "none";
     levelThree.style.display = "none";
    player.style.top = -10;//y
player.style.left = window.innerWidth/2;//x
   
  } 

  if (value === "player" || stickToMouse == true){
    stickToMouse = true;
    player.style.top = event.clientY;//y
    player.style.left = event.clientX;//x

  } 
  if (value === "finish") {
    levelCounter++;
    console.log("FIn: " + levelCounter);
    if(levelCounter == 1){
      nextButtonTwo.style.opacity = 1;
      nextButtonTwo.style.pointerEvents = "all";
      levelOne.style.pointerEvents = "none";
      stickToMouse = false;
      player.style.top = 307;
      player.style.left = 692;
      
    }
    else if(levelCounter == 2){
      nextButtonThree.style.opacity = 1;
      nextButtonThree.style.pointerEvents = "all";
      levelTwo.style.pointerEvents = "none";
      stickToMouse = false;
      player.style.top = 305;
      player.style.left = 220;
      
    }
    
  }

  if (value === "end-game") {
     levelThree.style.display = "none";
     player.style.top = -10;//y
     player.style.left = window.innerWidth/2;//x
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

                                 

