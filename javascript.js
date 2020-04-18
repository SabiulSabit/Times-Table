//global varaible
var playing = false;
var score,action;
var timeRemaining;

//click start/restart
document.getElementById('startReset').onclick =function functionName() {

     // if playing
     if(playing == true){
       location.reload();
     }
     else {  // if not playing
          score = 0;
          playing = true;
          timeRemaining=10;
          document.getElementById("scoreValue").innerHTML = score;
          document.getElementById("timeRemainingValue").innerHTML = timeRemaining;
          show("timeRemaining");
          hide("gameOver");
          document.getElementById("startReset").innerHTML = "Reset Game";

          //timer countdown
          startCounter();

          //generet qustion
          generetQusAndAns();

     }
}


// start counter
function startCounter() {
  action = setInterval(function(){
   timeRemaining-=1;
   document.getElementById("timeRemainingValue").innerHTML = timeRemaining;
   if(timeRemaining==0){ // game time over
       stopCountDown(action);
       show("gameOver");
       document.getElementById("gameOver").innerHTML= "<p>!! game over !!</p><p>your score is "+score +"</p> ";
       hide("timeRemaining");
       hide("correct");
       hide("wrong");
       playing=false;
       document.getElementById("startReset").innerHTML = "Start Game";
   }
  },1000);
}

// stop the counter
function stopCountDown(){
  clearInterval(action);
}

function hide(Id){
  document.getElementById(Id).style.display= "none";
}

function show(Id){
  document.getElementById(Id).style.display= "block";
}

//generet Qustion And Answer
function generetQusAndAns(){

}
