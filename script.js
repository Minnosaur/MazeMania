let levelCounter = 0; 

const nextButtonTwo = document.querySelector(".next-2");
const nextButtonThree = document.querySelector(".next-3");

//svg mazes
const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");
const levelThree = document.querySelector(".level-three");

window.addEventListener("mousemove", e => {
  console.log(e.target.classList.value);
});

window.addEventListener("mousemove", (e) => {
  let check = e.target.classList.value;
  collisionCheck(check);
});

const collisionCheck = (value) => {
  if (value === "maze-border"){
     //make start/home page --> reset to there
   console.log("hit");
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
    document.body.style.background = "black";
  }
};

nextButtonTwo.addEventListener("click", () => {
    levelOne.style.display = "none";
    levelTwo.style.display = "block";
    nextButtonTwo.style.opacity = 0;
    nextButtonTwo.style.pointerEvents = "none";
});

nextButtonThree.addEventListener("click" , () => {
    levelTwo.style.display = "none";
    levelThree.style.display = "block";
    nextButtonThree.style.opacity = 0;
    nextButtonThree.style.pointerEvents = "none";
})

                                 
document.addEventListener("mousemove", () => {
  let mousex = event.clientX; // Gets Mouse X
  let mousey = event.clientY; // Gets Mouse Y
  console.log([mousex, mousey]); // Prints data
  
});
